import React from 'react'
import Recommends from "@/lib/components/recommends/Recommends";
import { useAppSelector } from '@/lib/redux/store/hooks';

const BucketRecommends = () => {
  const items = useAppSelector(({ items }) => items)
  const brands = items.map(x => x.item.brand.id)

  return <Recommends fromItem={false} brands={brands} />
}

export default BucketRecommends