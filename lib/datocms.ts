// import { GraphQLClient } from "graphql-request";
import { GraphQLClient } from "graphql-request";
// import { GraphQLRequestContext } from "graphql-request/dist/types";

export type Variables = { [key: string]: any };
// export interface GraphQLRequestContext<V extends Variables = Variables> {
//   query: string | string[];
//   variables?: V;
// }

export function request(
  query: string,
  variables?: Variables,
  includeDrafts?: boolean,
  excludeInvalid?: boolean
) {
  const headers: { [key: string]: any } = {
    // authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    authorization: `Bearer eac83496c71333525d781c9f123e43`,
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
