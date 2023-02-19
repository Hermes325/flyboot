import React from "react";
import DefaultTags from "@/app/DefaultTags";
import { getItemSeo } from "@/lib/datocms";

async function Head({ params }: { params: { slug: string } }) {
  const itemMeta = await getItemSeo(params.slug);

  const title = itemMeta.seo.find((x: { tag: string }) => x.tag === "title");
  const metaTags = itemMeta.seo.filter(
    (x: { tag: string }) => x.tag === "meta"
  );
  const linkTags = itemMeta.site.favicon;

  return (
    <>
      <title>{title.content}</title>
      <DefaultTags />
      {metaTags.map(({ attributes }: any, i: any) => (
        <meta key={`item-meta-${i}`} {...attributes} />
      ))}
      {linkTags.map(({ attributes }: any, i: any) => (
        <link key={`item-link-${i}`} {...attributes} />
      ))}
    </>
  );
}

export default Head;
