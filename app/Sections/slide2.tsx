'use client'
import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getHotItemsForLanding, Item } from "@/lib/datocms";
import classNames from "classNames";
import styles from "./styles/slide2.module.css";
import "./styles/slides.css";


type Options = InferGetStaticPropsType<typeof getStaticProps>

const Slide2 = ({ items }: Options) => (
  <section>
    {JSON.stringify(items, null, 2)}
  </section>)


export const getStaticProps: GetStaticProps = async (_) => {
  const items: Item[] = await getHotItemsForLanding()

  return {
    props: {
      items,
    }
  }
}

export default Slide2;
