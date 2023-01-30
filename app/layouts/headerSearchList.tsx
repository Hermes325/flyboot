import { Item } from '@/lib/datocms'
import React from 'react'
import NavLink from './link'

type Props = {
  items: Item[]
}

const HeaderSearchList = ({ items }: Props) => {
  return (
    <nav>
      <ul>
        {items.map(item =>
          <li key={item.slug}>
            <NavLink href={`/Catalog/${item.slug}`}>
              {item.title}
            </NavLink>
          </li>)}
      </ul>
    </nav>
  )
}

export default HeaderSearchList