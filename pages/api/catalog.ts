import { Catalog, getItems, SortType } from '../../lib/datocms';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getCatalog(
  req: NextApiRequest,
  res: NextApiResponse<Catalog>
) {
  console.log("/api/catalog REQUEST\n")

  const orderBy: SortType = req.body["orderBy"] === "default"
    ? SortType.default
    : req.body["orderBy"]

  const catalog = await getItems(
    req.body["brands"],
    req.body["categories"],
    req.body["sex"],
    req.body["page"] ?? 0,
    req.body["minPrice"] ?? 0,
    req.body["maxPrice"] ?? 1000000000,
    orderBy ?? SortType.default
  );
  console.log("\n/api/catalog RESPONSE\n", JSON.stringify(catalog, null, 2))
  res.status(200).json(catalog);
}