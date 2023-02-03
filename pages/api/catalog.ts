import { Catalog, getCatalogItems, SortType } from '../../lib/datocms';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getCatalog(
  req: NextApiRequest,
  res: NextApiResponse<Catalog>
) {
  // console.log("/api/catalog REQUEST\n", typeof req.body, "\n", req.body)

  const catalog = await getCatalogItems(
    req.body["brands"],
    req.body["categories"],
    req.body["page"] ?? 0,
    req.body["minPrice"] ?? 0,
    req.body["maxPrice"] ?? 1000000000,
    req.body["orderBy"] ?? SortType.default
  );
  // console.log("\n/api/catalog RESPONSE\n", JSON.stringify(catalog, null, 2))
  res.status(200).json(catalog);
}