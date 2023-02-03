import { Item, searchItem } from "../../lib/datocms";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function search(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  console.log(req.query["name"])
  const name = req.query["name"]
  const searchResponse = await searchItem(name as string)
  res.status(200).json(searchResponse);
}
