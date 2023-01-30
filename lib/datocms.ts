import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";



// Типы =====================================================
export type Item = {
  brand: string
  category: string
  description1: string
  description2: string
  slug: string
  title: string
  poizonId: string
  price: number
  images: { responsiveImage: any }[]
}
// Запросы ==================================================

//* Товары для лэндинга
export async function getHotItemsForLanding(): Promise<Item[]> {
  const query = gql`
    query {
      allItems(first: 1, skip: 0) {
        title
        price
        images {
          responsiveImage(imgixParams: {auto: format}) {
            sizes
            src
            width
            height
            alt
            title
            base64
          }
        }
      }
    }
  `;
  const response = await graphQLRequest({ query })
  return response.allItems
}

//* Каталог
export async function getCatalogPaths(): Promise<string[]> {
  const query = gql`{
    allItems {
      slug
    }
  }`
  const response = await graphQLRequest({ query })
  console.log("response" + JSON.stringify(response));
  return response.data.allItems
    .map((item: Item) => item.slug)
}

//* Товар
export async function getItem(slug: string): Promise<Item> {
  const query = gql`
    query GetItem($slug:String) {
      item(filter: {slug: {eq: $slug}}) {
        slug
        brand
        category
        description1
        description2
        title
        poizonId
        price
        images {
          responsiveImage(imgixParams: {auto: format}) {
            sizes
            src
            width
            height
            alt
            title
            base64
          }
        }
      }
    }
    `;

  return await graphQLRequest({
    query,
    variables: { slug }
  });
}


// Utils =====================================================
export type GraphQLRequest = {
  query: string;
  variables?: { [key: string]: any };
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