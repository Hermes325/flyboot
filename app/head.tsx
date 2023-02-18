import React from 'react'
import { getSiteSeo } from '@/lib/datocms';

async function Head() {
  const siteMeta = await getSiteSeo()

  const links = siteMeta.site.favicon

  return (<>
    {links.map((link, i) => <link key={i} {...link.attributes} />)}
  </>)
}

export default Head