import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

// Типы ======================================
export type Variables = {
  [key: string]: any;
};

export type GraphQLRequest = {
  query: string;
  variables?: Variables;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
};

export type Item = {
  author: string;
  content: string;
};

// Запросы ======================================
export async function getHotItemsForLanding(): Promise<Item[]> {
  const query = gql`
    query {
      allItems(first: 1, skip: 0) {
        id
      }
    }
  `;

  const response = await graphQLRequest({ query });

  console.log(response);

  return response;
}

// Utils ======================================
export function graphQLRequest(options: GraphQLRequest) {
  const { query, variables, includeDrafts, excludeInvalid } = options;

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
