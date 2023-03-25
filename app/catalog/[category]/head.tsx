import React from 'react'
import { getSiteSeo } from '@/lib/datocms';
import DefaultTags from '@/app/DefaultTags';

async function Head({
  params,
}: {
  params: { category: string };
}) {
  const siteMeta = await getSiteSeo()
  const linkTags = siteMeta.site.favicon
  let categoryRUS;
  switch (params.category) {
    case "shoes":
      categoryRUS = "Обувь"
      break;
    case "apparel":
      categoryRUS = "Одежда"
      break;
    case "accessory":
      categoryRUS = "Аксессуары"
      break;
    default:
      categoryRUS = "Каталог"
      break;
  }

  return (<>
    <title>{`${categoryRUS} | FlyBoots`}</title>
    <DefaultTags />
    {linkTags.map(({ attributes }, i) =>
      <link key={`link-${i}`} {...attributes} />)}
  </>)
}

export default Head