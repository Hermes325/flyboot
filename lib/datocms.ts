import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

export type Variables = { [key: string]: any };

export type GraphQLRequest = {
  query: string;
  variables?: Variables;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}

export function graphQLRequest(options: GraphQLRequest) {

  const {
    query,
    variables,
    includeDrafts,
    excludeInvalid
  } = options;

  const headers: { [key: string]: string } = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  return client.request(query, variables);
}

// Запросы ======================================

const pageQuery = gql`
  query {
    allBoots(first: 1, skip: 0) {
      id
    }
  }
`;
export type Item = {
  author: string
  content: string
}

export function getHotItemsForLanding() {

}