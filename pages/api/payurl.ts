import type { NextApiRequest, NextApiResponse } from "next";


const payStr = (id: string, email: string, signature: string, transactionId: string) => `
<?xml version="1.0" encoding="UTF-8" ?>
<MNT_RESPONSE>
  <MNT_ID>${id}</MNT_ID>
  <MNT_TRANSACTION_ID>${transactionId}</MNT_TRANSACTION_ID>
  <MNT_RESULT_CODE>200</MNT_RESULT_CODE>
  <MNT_SIGNATURE>${signature}</MNT_SIGNATURE>
  <MNT_ATTRIBUTES>
  <ATTRIBUTE>
    <KEY>INVENTORY</KEY>
    <VALUE>[{
      "name": "product 1 name", 
      "price": "product 1 price", 
      "quantity": "product 1 quantity", 
      "vatTag": "1105", 
      "pm": "full_payment", 
      "po": "service", 
      "agent_info": {"type": "agent"}, 
      "supplier_info": {"phones": ["11111","22222"], "name": "supplier first", "inn": "1215948374"}
    }, 
    {
      "name": "product 2 name", 
      "price": "product 2 price",
      "quantity": "product 2 quantity", 
      "vatTag": "1105", 
      "pm": "full_payment", 
      "po": "service", 
      "agent_info": {"type": "agent"}, 
      "supplier_info": {"phones": ["33333","44444"], "name": "supplier second", "inn": "4756493018"}
    }]</VALUE>
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
    <VALUE>0</VALUE>
  </ATTRIBUTE>
  </MNT_ATTRIBUTES>
</MNT_RESPONSE>`

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("/api/payurl REQUEST\n", req.body)
  console.log(JSON.stringify(req.query, null, 2));

  const MNT_AMOUNT = req.body["MNT_AMOUNT"]//: "1.00",
  const MNT_CUSTOM3 = req.body["MNT_CUSTOM3"]//: "msk.vitaly@gmail.com",
  const MNT_TEST_MODE = req.body["MNT_TEST_MODE"]//: "0",
  const MNT_TRANSACTION_ID = req.body["MNT_TRANSACTION_ID"]//: "t-1676554259242",
  const MNT_CURRENCY_CODE = req.body["MNT_CURRENCY_CODE"]//: "RUB",
  const containerId = req.body["containerId"]//: "paw-payment-form-7423Pz",
  const MNT_SUBSCRIBER_ID = req.body["MNT_SUBSCRIBER_ID"]//: "georg3georg3georg@gmail.com",
  const MNT_OPERATION_ID = req.body["MNT_OPERATION_ID"]//: "703687951",
  const paymentSystem_unitId = req.body["paymentSystem_unitId"]//: "1686945",
  const MNT_CORRACCOUNT = req.body["MNT_CORRACCOUNT"]//: "303",
  const MNT_SIGNATURE = req.body["MNT_SIGNATURE"]//: "4f29bcc4a55053b62673300a501458d3",
  const MNT_ID = req.body["MNT_ID"]//: "25060038"


  res.setHeader("Content-type", "application/xml")

  const payResponse = payStr(
    MNT_ID,
    MNT_SUBSCRIBER_ID,
    MNT_SIGNATURE,
    MNT_TRANSACTION_ID)

  console.log("payResponse\n", payResponse);
  res.status(200).send(payResponse);
}
