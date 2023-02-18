import React from 'react'
import { getItemSeo } from '@/lib/datocms';

async function Head({ params }: { params: { slug: string } }) {
  const itemMeta = await getItemSeo(params.slug)

  const title = itemMeta.seo.find(x => x.tag === "title")
  const metaTags = itemMeta.seo.filter(x => x.tag === "meta")

  return (<>
    <title>{title.content}</title>
    {metaTags.map(meta => <meta key={meta.name} {...meta.attributes} />)}
  </>)
}

export default Head