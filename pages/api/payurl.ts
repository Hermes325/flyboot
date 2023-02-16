import type { NextApiRequest, NextApiResponse } from "next";


export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("/api/payurl REQUEST\n", req.body)
  console.log(JSON.stringify(req.query, null, 2));
  res.status(200).json({
    body: req.body,
    query: req.query
  });
}
