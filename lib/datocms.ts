import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

export const PAGE_SIZE = 18;

// Типы =====================================================
export type Item = {
  title: string;
  slug: string;
  sex: string;
  id: string;
  color: string;
  category: string;
  subcategory: string;
  description1: string;
  description2: string;
  poizonArticul: string;
  poizonId: string;
  price: number;
  brand: { name: string; id: string };
  images: { responsiveImage: any }[];
  relatedItems: Item[];
};
export type Catalog = {
  items: Item[];
  max: { price: number };
  min: { price: number };
  all: { count: number };
};
export type CatalogBrandsAndCategories = {
  brands: { name: string; id: string }[];
  category: {
    categoryJson: {
      [category: string]: {
        [subCategory: string]: string;
      };
    };
  };
};
export type ItemSeo = {
  seo: any[];
  site: { favicon: any[] };
};
export type SiteSeo = {
  site: {
    favicon: {
      attributes: {
        sizes: string;
        type: string;
        rel: string;
        href: string;
      };
      content: string;
      tag: string;
    }[];
  };
};
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
          responsiveImage(imgixParams: { auto: format, borderRadius: "12" }) {
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
    }
  `;
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
    $first: IntType, 
    $skip: IntType, 
    $orderBy: [ItemModelOrderBy] = null, 
    ${brands ? "$brands: [ItemId]," : ""} 
    ${categories ? "$categories: [String]," : ""}
    ${subcategories ? "$subcategories: [String]," : ""}
    ${sex ? "$sex: [String]," : ""} 
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
          responsiveImage(imgixParams: { auto: format, borderRadius: "12" }) {
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
      skip: page * PAGE_SIZE,
      first: PAGE_SIZE,
      orderBy: orderBy === SortType.default ? null : orderBy,
      brands,
      categories,
      subcategories,
      sex,
      minPrice,
      maxPrice,
    },
  };

  // console.log(subcategories, JSON.stringify(options.variables, null, 2));

  const response: Catalog = await graphQLRequest(options);
  return response;
}

//* Страница товара
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
        description1(markdown: true)
        description2(markdown: true)
        poizonId
        poizonArticul
        price
        sex
        relatedItems {
          id
          slug
          color
        }
        images {
          responsiveImage(imgixParams: { auto: format, borderRadius: "15" }) {
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

  return { ...response.item, site: response.site };
}

export async function getItemSeo(slug: string): Promise<ItemSeo & SiteSeo> {
  const query = gql`
    query GetItem($slug: String) {
      item(filter: { slug: { eq: $slug } }) {
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
    }
  `;

  const response = await graphQLRequest({
    query,
    variables: { slug },
  });

  return {
    seo: response.item.seo,
    site: response.site,
  };
}

export async function getRecommendsHandler(
  // Не рекомендуем текущий товар
  currentSlug: string,
  // Не рекомендуем товары одного цвета
  currentRelated: string[],
  // Рекомендуем товары одного бренда
  brands: string[]
): Promise<Catalog> {
  const queryVariables = `
    $first: IntType, 
    $slug: String,
    $brands: [ItemId], 
    $notInRelated: [ItemId]
  `;

  const queryFilter = `filter: { 
    brand: {in: $brands}, 
    slug: { neq: $slug }, 
    relatedItems: {notIn: $notInRelated}
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
      slug: currentSlug,
    },
  });
  return response;
}

//* Глобальное SEO
export async function getSiteSeo(): Promise<SiteSeo> {
  const query = gql`
    query {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
    }
  `;
  return await graphQLRequest({ query });
}

//* Поиск товара
export async function searchItem(name: string): Promise<Item[]> {
  const query = gql`
    query searchItem($name: String!) {
      allItems(
        first: 15
        skip: 0
        filter: { title: { matches: { pattern: $name } } }
      ) {
        slug
        title
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
        price
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
