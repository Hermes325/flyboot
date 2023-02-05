import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

// Типы =====================================================
export type Item = {
  sex: string,
  brand: string;
  category: string;
  subcategory: string;
  description1: string;
  description2: string;
  slug: string;
  title: string;
  poizonId: string;
  price: number;
  images: { responsiveImage: any }[];
}
export type Catalog = {
  items: Item[],
  max: { price: number },
  min: { price: number },
  all: { count: number }
}
export type CatalogBrandsAndCategories = {
  brands: { name: string }[],
  category: {
    categoryJson: {
      [category: string]: {
        [subCategory: string]: string
      }
    }
  }
}
export enum SortType {
  default,
  price_ASC,
  price_DESC,
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
          responsiveImage(imgixParams: { auto: format }) {
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
  const response = await graphQLRequest({ query });
  return response.allItems;
}

//* Ссылки на все товары для статической генерации
export async function getCatalogPaths(): Promise<string[]> {
  const query = gql`
    {
      allItems {
        slug
      }
    }
  `;
  const response = await graphQLRequest({ query });
  console.log("response" + JSON.stringify(response));
  return response.allItems.map((item: Item) => item.slug);
}

//* Все бренды и категории для каталога
export async function getBrandsAndCategories(): Promise<CatalogBrandsAndCategories> {
  const query = gql`
  {
    brands: allBrands {
      name
    }
    category {
      categoryJson
    }
  }`;
  return await graphQLRequest({ query });
}

//TODO: фильтр на sex, subcategories
//* Все товары для каталога
export async function getItems(
  // Фильтр по бренду
  brands?: string[],
  // Фильтр по категории
  categories?: string[],
  // Фильтр по полу
  sex?: string[],
  // Пагинация
  page: number = 0,
  // Фильтр по цене
  minPrice: number = 0,
  maxPrice: number = 1000000000,
  // Сортировка по цене
  orderBy: SortType = SortType.default
): Promise<Catalog> {

  const queryVariables = `
    $first: IntType = 15, 
    $skip: IntType = 0, 
    $orderBy: [ItemModelOrderBy] = null, 
    ${brands ? '$brands: [String],' : ''} 
    ${categories ? '$categories: [String],' : ''}
    ${sex ? '$sex: [String],' : ''} 
    $minPrice: FloatType = 0, 
    $maxPrice: FloatType = 1000000000
  `;

  const queryFilter = `
    filter: {
      ${brands ? "brand: {in: $brands}, " : ""}
      ${categories ? "category: {in: $categories}, " : ""}
      ${sex ? "sex: {in: $sex}, " : ""}
      price: {gte: $minPrice, lte: $maxPrice}
    }
  `;

  const query = gql`
    query GetCatalog(${queryVariables}) {
      items: allItems(first: $first, skip: $skip, orderBy: $orderBy, ${queryFilter}) {
        slug
        title
        price
        poizonId
        images {
          responsiveImage(imgixParams: { auto: format }) {
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
      max: item(orderBy: price_DESC, ${queryFilter}) {
        price
      }
      min: item(orderBy: price_ASC, ${queryFilter}) {
        price
      }
      all: _allItemsMeta(${queryFilter}) {
        count
      }
    }
  `;

  const response: Catalog = await graphQLRequest({
    query,
    variables: {
      "skip": page * 15,
      "orderBy": orderBy === SortType.default ? null : orderBy,
      brands,
      categories,
      sex,
      minPrice,
      maxPrice
    }
  });
  return response;
}

export async function getRecommendsHandler(
  // Не рекомендуем текущий товар
  currentSlug: string,
  // Рекомендуем товары одного бренда
  brands: string[]
): Promise<Catalog> {

  const queryVariables = `
    $first: IntType = 12, 
    $brands: [String], 
    $slug: String
  `;

  const queryFilter = `filter: { 
    brand: {in: $brands}, 
    slug: { neq: $slug } 
  }`;

  const query = gql`
    query GetRecommends(${queryVariables}) {
      items: allItems(first: $first, ${queryFilter}) {
        slug
        title
        price
        poizonId
        images {
          responsiveImage(imgixParams: { auto: format }) {
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

  const response: Catalog = await graphQLRequest({
    query,
    variables: {
      "skip": 12,
      "brands": brands,
      "slug": currentSlug
    }
  });
  return response;
}



//* Товар
export async function getItem(slug: string): Promise<Item> {
  const query = gql`
    query GetItem($slug: String) {
      item(filter: { slug: { eq: $slug } }) {
        slug
        brand
        category
        description1
        description2
        title
        poizonId
        price
        images {
          responsiveImage(imgixParams: { auto: format }) {
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

  const response = await graphQLRequest({
    query,
    variables: { slug },
  });

  return response.item;
}

//* Поиск товара
export async function searchItem(name: string): Promise<Item[]> {
  const query = gql`
    query searchItem($name: String!) {
      allItems(
        first: 1
        skip: 0
        filter: { title: { matches: { pattern: $name } } }
      ) {
        slug
        title
      }
    }
  `;
  const response = await graphQLRequest({
    query,
    variables: { name },
  });

  return response.allItems;
}

// Utils =====================================================
export type GraphQLRequest = {
  query: string;
  variables?: { [key: string]: any };
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
};

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