import React from "react";

function ItemPage({ params }: { params: { slug: string } }) {
  return <div>ItemPage {params.slug}</div>;
}

export default ItemPage;
