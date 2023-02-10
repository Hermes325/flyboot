import type { NextApiRequest, NextApiResponse } from "next";


export type Sizes = {
  [size: string]: string,
  sizeKey: string
}

//* Функция Егора
export default async function sizes(
  req: NextApiRequest,
  res: NextApiResponse<Sizes>
) {
  console.log("/api/sizes REQUEST\n", req.body)
  const articul = req.body["articul"]
  const price = req.body["price"]
  console.log("\narticul >> ", articul)
  console.log("\nprice >> ", price)

  const responseJSON = await fetch(
    `https://functions.yandexcloud.net/d4etdktavt47h0i8r4u8?articul=${articul}&price=${price}`,
    {
      method: 'GET',
      redirect: 'follow',
      headers: {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate",
        "Authorization": `Api-Key ${process.env.NEXT_YANDEX_API_TOKEN}`,
        "Connection": "keep-alive",
        "User-Agent": "python-requests/2.25.1"
      }
    })
  const response: Sizes = await responseJSON.json()

  console.log("/api/sizes RESPONSE", JSON.stringify(response, null, 2))
  res.status(200).json(response);
}
