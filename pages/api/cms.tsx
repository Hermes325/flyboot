import React from "react";
import { gql } from "graphql-request";
import { request } from "../../lib/datocms";
import type { NextApiRequest, NextApiResponse } from "next";

const pageQuery = gql`
  query {
    allBoots(first: 1, skip: 0) {
      id
    }
  }
`;

export default async function CMS(_: NextApiRequest, res: NextApiResponse) {
  const qwe = await request({ query: pageQuery });
  console.log(qwe);
  res.status(200).json(qwe);
}
