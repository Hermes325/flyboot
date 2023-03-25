import React from 'react'
import { getSiteSeo } from '@/lib/datocms';
import DefaultTags from '@/app/DefaultTags';

async function Head() {
  const siteMeta = await getSiteSeo()
  const linkTags = siteMeta.site.favicon
  const categoryRUS = "Каталог"

  return (<>
    <title>{`${categoryRUS} | FlyBoots`}</title>
    <DefaultTags />
    {linkTags.map(({ attributes }, i) =>
      <link key={`link-${i}`} {...attributes} />)}
  </>)
}

export default Head