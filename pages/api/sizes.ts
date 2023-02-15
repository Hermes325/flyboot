import type { NextApiRequest, NextApiResponse } from "next";



export type Sizes = {
  sizeValue: string[]
  sizeKey: string
}[]

const mock: Sizes = [
  {
    sizeKey: "EU",
    sizeValue: "34,35,36,37,38,39,40,41,42".split(',')
  },
  {
    sizeKey: "US",
    sizeValue: "4,5,6,7,8,9,10,11,12".split(',')
  },
  {
    sizeKey: "UK",
    sizeValue: "1,2,3,4,5,6,7,8,9".split(',')
  },
  {
    sizeKey: "JP",
    sizeValue: "22.5,23,24,24.5,25,26,26.5,27,28".split(',')
  }
]

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
