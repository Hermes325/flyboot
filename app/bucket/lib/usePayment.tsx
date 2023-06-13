import { useEffect } from "react";
import { Order } from "../model/types";
import emailjs from "@emailjs/browser";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store/hooks";
import { BucketItem, deleteAllItems } from "@/lib/redux/slices/itemSlice";
import { useRouter } from "next/navigation";
import { ItemPayDto } from "@/pages/api/payurl";
import { emptyOrder } from "../model/emptyOrder";

type Props = {
  order: Order
  setOrder: React.Dispatch<React.SetStateAction<Order>>
}
function usePayment({ order, setOrder }: Props): () => void {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const bucketItems = useAppSelector(({ items }) => items);

  //#region Расчёт стоимости
  const itemsPrice = Math.ceil(
    bucketItems.reduce((a, v) => a + v.item.price * v.amount, 0)
  );
  const deliveryPrice = 350;
  const finalPrice = deliveryPrice + itemsPrice;
  //#endregion

  function payment() {
    // items + order → options
    let clientDelivery: string;
    switch (order.delivery) {
      case "Sdek":
        clientDelivery = `${order.Sdek?.cityName} ${order.Sdek?.PVZ?.Address}`;
        break;
      case "BoxBerry":
        clientDelivery = order?.BoxBerry?.address;
        break;
      default:
        clientDelivery = `г.${order.city} ул.${order.street} к.${order.build} кв.${order.apartment}`;
        break;
    }

    const getSizeName = (size: BucketItem["size"]) =>
      size.available.find((x) => x.sizeKey === size.chosenSizeKey)?.sizeValue[size.chosenSizeValue];

    const options = {
      account: 25060038,
      amount: finalPrice, // 1руб,
      transactionId: "t-" + Date.now(),
      subscriberId: order.email,
      customParams: {
        // товары
        items: bucketItems
          .reduce<BucketItem[]>((arr, curr) => {
            // Одинаковый элемент
            const sameIndex = arr.findIndex(({ item, size }) =>
              item.poizonArticul === curr.item.poizonArticul &&
              size.chosenSizeKey === curr.size.chosenSizeKey &&
              size.chosenSizeValue === curr.size.chosenSizeValue
            );

            if (sameIndex === -1) arr.push(curr);
            else arr[sameIndex].amount += curr.amount;

            return arr;
          }, [])
          .map<ItemPayDto>(({ item, size, amount }) => ({
            item_title: item.title,
            item_poizon_articul: item.poizonArticul,
            item_price: item.price,
            item_amount: amount,
            item_size: `${size.chosenSizeKey} ${getSizeName(size)}`,
          }))
          .reduce((arr, item) => ({
            ...arr, [`item_${item.item_poizon_articul}`]: JSON.stringify(item, null, 0)
          }), {}),
        // о клиенте
        client: {
          client_delivery: clientDelivery,
          client_name: order.name,
          client_phone: order.phone,
          client_comment: order.comment,
          client_delivery_method: order.delivery,
        },
      },
    };

    console.log("options >>> ", options);

    const assistant = new (window as any).Assistant.Builder();

    // платёж прошёл успешно
    assistant.setOnSuccessCallback((operationId: string, transactionId: string) => {
      console.log("setOnSuccessCallback");
      dispatch(deleteAllItems());
      setOrder(emptyOrder);
      router.push("/thank-you");
    });

    // платёж не прошёл
    assistant.setOnFailCallback((operationId: string, transactionId: string) => {
      console.log("setOnFailCallback");
    });

    // платёж обрабатывается
    assistant.setOnInProgressCallback((operationId: string, transactionId: string) => {
      console.log("setOnInProgressCallback");
      const emailList = bucketItems
        .reduce<BucketItem[]>((arr, curr) => {
          // Одинаковый элемент
          const sameIndex = arr.findIndex(
            ({ item, size }) =>
              item.poizonArticul === curr.item.poizonArticul &&
              size.chosenSizeKey === curr.size.chosenSizeKey &&
              size.chosenSizeValue === curr.size.chosenSizeValue
          );

          if (sameIndex !== -1) {
            arr[sameIndex].amount + curr.amount;
          } else arr.push(curr);
          return arr;
        }, [])
        .map<ItemPayDto>(({ item, size, amount }) => ({
          item_title: item.title,
          item_poizon_articul: item.poizonArticul,
          item_price: item.price,
          item_amount: amount,
          item_size: `${size.chosenSizeKey} ${getSizeName(size)}`,
        }))
        .map(x => ({
          "name": `${x.item_title} | ${x.item_poizon_articul} | ${x.item_size}`,
          "price": x.item_price,
          "quantity": x.item_amount,
        }))

      const orderData = {
        'FIO': order.name,
        'Email': order.email,
        'phone': order.phone,
        'list': JSON.stringify(emailList, null, 2),
        'delivery_method': order.delivery,
        'address': clientDelivery,
        'comment': order.comment,
      }
      emailjs
        .send(
          "service_meeb64l",
          "template_3i6j7qf",
          orderData,
          "Igg7aXsdDmTo0FNZG"
        )
        .then((result: any) => console.log("result.text", result.text))
        .catch((error: any) => console.error("catch error.text", JSON.stringify(error)))
        .finally(() => console.log("finally"));
    });

    assistant.build(options);
  }

  function startPayment() {
    setOrder(x => ({ ...x, startPayment: x.startPayment + 1 }))
  }

  useEffect(() => {
    if (order.startPayment !== 0) payment();
  }, [order.startPayment]);

  return startPayment
}

export default usePayment