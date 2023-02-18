import React from 'react'
import DefaultTags from './DefaultTags';
import { getSiteSeo } from '@/lib/datocms';

async function Head() {
  const siteMeta = await getSiteSeo()

  const linkTags = siteMeta.site.favicon

  return (<>
    <DefaultTags />
    {linkTags.map(({ attributes }, i) => <link key={`link-${i}`} {...attributes} />)}
  </>)
}

export default Head