import React from 'react'
import DefaultTags from '@/app/DefaultTags';
import { getItemSeo } from '@/lib/datocms';

async function Head({ params }: { params: { slug: string } }) {
  const itemMeta = await getItemSeo(params.slug)

  const title = itemMeta.seo.find(x => x.tag === "title")
  const metaTags = itemMeta.seo.filter(x => x.tag === "meta")
  const linkTags = itemMeta.site.favicon

  return (<>
    <title>{title.content}</title>
    <DefaultTags />
    {metaTags.map(({ attributes }, i) => <meta key={`item-meta-${i}`} {...attributes} />)}
    {linkTags.map(({ attributes }, i) => <link key={`item-link-${i}`} {...attributes} />)}
  </>)
}

export default Head