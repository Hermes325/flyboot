import { Item } from '@/lib/datocms'
import React from 'react'

type Props = {
  item: Item
}

const BucketItemCard = ({ item }: Props) => {
  return (
    <div>
      <h3>{item.slug}</h3>
    </div>)
}

export default BucketItemCard