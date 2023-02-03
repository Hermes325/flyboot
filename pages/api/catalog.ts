import { Catalog, getCatalogItems, SortType } from '../../lib/datocms';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getCatalog(
  req: NextApiRequest,
  res: NextApiResponse<Catalog>
) {
  const body = JSON.parse(req.body)
  // console.log("/api/catalog REQUEST\n", body)

  const catalog = await getCatalogItems(
    body["brands"],
    body["categories"],
    body["page"] ?? 0,
    body["minPrice"] ?? 0,
    body["maxPrice"] ?? 1000000000,
    body["orderBy"] ?? SortType.default
  );
  // console.log("\n/api/catalog RESPONSE\n", JSON.stringify(catalog, null, 2))
  res.status(200).json(catalog);
}

export const config = {
  api: {
    bodyParser: true
  }
}