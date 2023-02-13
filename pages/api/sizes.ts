import type { NextApiRequest, NextApiResponse } from "next";


export type Sizes = {
  [size: string]: string,
  sizeKey: "EU" | "RU" | "UK" | "US" | "FR"
}

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
          "Authorization": `Api-Key ${process.env.NEXT_YANDEX_API_TOKEN}`,
        }
      })
    const response: Sizes = await responseJSON.json()

    console.log("/api/sizes RESPONSE", JSON.stringify(response, null, 2))
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ error: e as Error });
  }
}
