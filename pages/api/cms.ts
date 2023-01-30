import { gql } from "graphql-request";
import { graphQLRequest } from "../../lib/datocms";
import type { NextApiRequest, NextApiResponse } from "next";

const pageQuery = gql`
  query {
    allBoots(first: 1, skip: 0) {
      id
    }
  }
`;

export default async function CMS(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const qwe = await graphQLRequest({ query: pageQuery });
  console.log(qwe);
  res.status(200).json(qwe);
}
