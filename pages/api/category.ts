import { Catalog, getCatalogItems } from './../../lib/datocms';
import type { NextApiRequest, NextApiResponse } from "next";


export default async function getCatalog(
  req: NextApiRequest,
  res: NextApiResponse<Catalog>
) {
  const catalog = await getCatalogItems(
    req.body["page"],
    req.body["orderBy"],
    req.body["brands"],
    req.body["category"],
    req.body["minPrice"],
    req.body["maxPrice"]);
  res.status(200).json(catalog);
}
