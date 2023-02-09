import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

// Типы =====================================================
export type Item = {
  title: string
  slug: string
  sex: string
  id: string
  category: string
  subcategory: string
  description1: string
  description2: string
  poizonArticul: string
  price: number
  brand: { name: string, id: string }
  images: { responsiveImage: any }[]
  relatedItems: Item[]
}
export type Catalog = {
  items: Item[],
  max: { price: number },
  min: { price: number },
  all: { count: number }
}
export type CatalogBrandsAndCategories = {
  brands: { name: string, id: string }[],
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
      allItems(first: 8, skip: 0) {
        title
        price
        slug
        images {
          responsiveImage(imgixParams: { auto: compress }) {
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
  // console.log("response" + JSON.stringify(response));
  return response.allItems.map((item: Item) => item.slug);
}

//* Все бренды и категории для каталога
export async function getBrandsAndCategories(): Promise<CatalogBrandsAndCategories> {
  const query = gql`
  {
    brands: allBrands {
      name
      id
    }
    category {
      categoryJson
    }
  }`;
  return await graphQLRequest({ query });
}

//* Все товары для каталога
export async function getItems(
  // Фильтр по бренду
  brands?: string[],
  // Фильтр по категории
  categories?: string[],
  // Фильтр по подкатегории
  subcategories?: string[],
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
    ${brands ? '$brands: [ItemId],' : ''} 
    ${categories ? '$categories: [String],' : ''}
    ${subcategories ? '$subcategories: [String],' : ''}
    ${sex ? '$sex: [String],' : ''} 
    $minPrice: FloatType = 0, 
    $maxPrice: FloatType = 1000000000
  `;

  const queryFilter = `
    filter: {
      ${brands ? "brand: {in: $brands}, " : ""}
      ${categories ? "category: {in: $categories}, " : ""}
      ${subcategories ? "subcategory: {in: $subcategories}, " : ""}
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
        poizonArticul
        images {
          responsiveImage(imgixParams: { auto: compress }) {
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

  const options = {
    query,
    variables: {
      skip: page * 15,
      orderBy: orderBy === SortType.default ? null : orderBy,
      brands,
      categories,
      subcategories,
      sex,
      minPrice,
      maxPrice
    }
  }

  // console.log(subcategories, JSON.stringify(options.variables, null, 2));

  const response: Catalog = await graphQLRequest(options);
  return response;
}

export async function getRecommendsHandler(
  // Не рекомендуем текущий товар
  currentSlug: string,
  // Не рекомендуем товары одного цвета
  currentRelated: string[],
  // Рекомендуем товары одного бренда
  brands: string[],
): Promise<Catalog> {

  const queryVariables = `
    $first: IntType, 
    $brands: [ItemId], 
    $slug: String
  `;

  const queryFilter = `filter: { 
    brand: {in: $brands}, 
    slug: { neq: $slug },
    notInRelated: [ItemId]
  }`;

  const query = gql`
    query GetRecommends(${queryVariables}) {
      items: allItems(first: $first, ${queryFilter}) {
        slug
        title
        price
        poizonArticul
        images {
          responsiveImage(imgixParams: {auto: compress}) {
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
      first: 12,
      brands,
      notInRelated: currentRelated,
      slug: currentSlug
    }
  });
  return response;
}



//* Товар
export async function getItem(slug: string): Promise<Item> {
  const query = gql`
    query GetItem($slug: String) {
      item(filter: { slug: { eq: $slug } }) {
        title
        slug
        id
        brand {
          id
        }
        color
        description1
        description2
        poizonArticul
        price
        relatedItems {
          id
          slug
          color
        }
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

  return response.item
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