import type { NextApiRequest, NextApiResponse } from "next";



export type Sizes = {
  sizeKey: string
  sizeValue: string[]
  available: boolean[]
}[]

// const mock: Sizes = [
//   {
//     sizeKey: "EU",
//     sizeValue: ["35.5", "36", "36.5", "37.5", "38", "38.5", "39", "40", "40.5", "41", "42", "42.5", "43", "44", "44.5", "45", "45.5", "46", "47", "47.5", "48", "48.5", "49.5", "50.5", "51.5"],
//     available: [false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, false, false]
//   },
//   {
//     sizeKey: "US",
//     sizeValue: ["3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15", "16", "17"],
//     available: [false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, false, false]
//   },
//   {
//     sizeKey: "UK",
//     sizeValue: ["3", "3.5", "4", "4.5", "5", "5.5", "6", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "14", "15", "16"],
//     available: [false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, false, false]
//   },
//   {
//     sizeKey: "CM",
//     sizeValue: ["22.5", "23", "23.5", "23.5", "24", "24", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30", "30.5", "31", "31.5", "32", "33", "34", "35"],
//     available: [false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, false, false]
//   }
// ]

//* Функция Егора
export default async function sizes(
  req: NextApiRequest,
  res: NextApiResponse<Sizes | { error: Error }>
) {
  console.log("/api/sizes REQUEST\n", req.body)
  const articul = req.body["articul"]
  const price = req.body["price"]
  console.log("\narticul >> ", articul)
  console.log("\nprice >> ", price)

  try {
    const responseJSON = await fetch(
      `https://functions.yandexcloud.net/d4etdktavt47h0i8r4u8?articul=${articul}&price=${price}`,
      {
        method: 'GET',
        redirect: 'follow',
        headers: {
          Authorization: `Api-Key ${process.env.NEXT_YANDEX_API_TOKEN}`,
        }
      })
    const response: Sizes = await responseJSON.json()
    // const response: Sizes = mock;

    // console.log("/api/sizes RESPONSE", JSON.stringify(response, null, 2))
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ error: e as Error });
  }
}
