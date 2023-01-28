import React from "react";
import { gql } from "graphql-request";
import { request } from "../../lib/datocms";

// import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";

const pageQuery = gql`
  query {
    catalog {
      id
      name
      slug
      items {
        ... on ItemRecord {
          id
          __typename
          title
          description
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const data: Promise<any> = await request(pageQuery);
  console.log(data);
  return {
    props: { data },
  };
}

function handler({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(data);
  return <div>{JSON.stringify(data, null, 2)}</div>;
}

export default handler;
