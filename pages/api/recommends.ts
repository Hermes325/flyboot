import { Catalog, getRecommendsHandler } from '../../lib/datocms';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getRecommendsQuery(
  req: NextApiRequest,
  res: NextApiResponse<Catalog>
) {
  // console.log("/api/recommends REQUEST\n", typeof req.body, "\n", req.body)

  const catalog = await getRecommendsHandler(
    req.body["slug"],
    req.body["brands"]);

  // console.log("\n/api/recommends RESPONSE\n", JSON.stringify(catalog, null, 2))
  res.status(200).json(catalog);
}