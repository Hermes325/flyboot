import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
import emailjs from "@emailjs/browser";

export type ItemPayDto = {
  item_title: string
  item_poizon_articul: string
  item_price: number
  item_amount: number
  item_size: string
}


const payStr = (id: string, email: string, signature: string, transactionId: string, inventory: string) => `
<?xml version="1.0" encoding="UTF-8" ?>
<MNT_RESPONSE>
  <MNT_ID>${id}</MNT_ID>
  <MNT_TRANSACTION_ID>${transactionId}</MNT_TRANSACTION_ID>
  <MNT_RESULT_CODE>200</MNT_RESULT_CODE>
  <MNT_SIGNATURE>${signature}</MNT_SIGNATURE>
  <MNT_ATTRIBUTES>
  <ATTRIBUTE>
    <KEY>INVENTORY</KEY>
    <VALUE>${inventory}</VALUE>
  </ATTRIBUTE>
  <ATTRIBUTE>
    <KEY>CUSTOMER</KEY>
    <VALUE>${email}</VALUE>
  </ATTRIBUTE>
  <ATTRIBUTE>
    <KEY>PHONE</KEY>
    <VALUE>79253186059</VALUE>
  </ATTRIBUTE>
  <ATTRIBUTE>
    <KEY>DELIVERY</KEY>
    <VALUE>350</VALUE>
  </ATTRIBUTE>
  </MNT_ATTRIBUTES>
</MNT_RESPONSE>`

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //#region Достать данные
  console.log("/api/payurl REQUEST body\n", req.body)
  console.log("/api/payurl REQUEST query\n", JSON.stringify(req.query, null, 2));

  const MNT_AMOUNT = req.query["MNT_AMOUNT"]//: "1.00",
  // const MNT_TEST_MODE = req.query["MNT_TEST_MODE"]//: "0",
  const MNT_TRANSACTION_ID = req.query["MNT_TRANSACTION_ID"]//: "t-1676554259242",
  // const MNT_CURRENCY_CODE = req.query["MNT_CURRENCY_CODE"]//: "RUB",
  // const containerId = req.query["containerId"]//: "paw-payment-form-7423Pz",
  const MNT_SUBSCRIBER_ID = req.query["MNT_SUBSCRIBER_ID"]//: "georg3georg3georg@gmail.com",
  // const MNT_OPERATION_ID = req.query["MNT_OPERATION_ID"]//: "703687951",
  // const paymentSystem_unitId = req.query["paymentSystem_unitId"]//: "1686945",
  // const MNT_CORRACCOUNT = req.query["MNT_CORRACCOUNT"]//: "303",
  const MNT_SIGNATURE = req.query["MNT_SIGNATURE"]
  const MNT_ID = req.query["MNT_ID"] ?? "25060038"
  const client_delivery = req.query["client_delivery"]
  const client_name = req.query["client_name"]
  const client_comment = req.query["client_comment"]
  const client_phone = req.query["client_phone"]
  const client_delivery_method = req.query["client_delivery_method"]


  const itemsPayDto = Object.entries(req.query)
    .filter(x => x[0].startsWith("item_"))
    .map<ItemPayDto>(x => JSON.parse(x[1] as string))

  console.log("---------------------------------\n")

  const itemsPayAnyWay = itemsPayDto.map(x => ({
    "name": `${x.item_title} |\n${x.item_poizon_articul}|\n${x.item_size}`,
    "price": x.item_price,
    "quantity": x.item_amount,
    "vatTag": "1105",
    "pm": "full_payment",
    "po": "service",
    "agent_info": { "type": "agent" }
  }))

  const itemsPayAnyWayJSON = JSON.stringify(itemsPayAnyWay, null, 0)

  console.log(itemsPayAnyWayJSON);
  //#endregion

  //#region Ответить в PayAnyWay 
  const payResponse = payStr(
    MNT_ID as string,
    MNT_SUBSCRIBER_ID as string,
    MNT_SIGNATURE as string,
    MNT_TRANSACTION_ID as string,
    itemsPayAnyWayJSON)

  console.log("---------------------------------\n/api/payurl RESPONSE\n", payResponse);
  res.setHeader("Content-type", "application/xml")
  res.status(200).send(payResponse);
  //#endregion
}
