"use client";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, deleteAll } from "../../lib/redux/slices/itemSlice";
import React from "react";


const TestRedux = () => {
  const dispatch = useDispatch();

  return (<div className="w-[100px] p-[10px] border bg-slate-500 rounded-sm absolute left-0 top-32">
    <button onClick={() => dispatch(addItem({
      brand: { id: "1", name: "Nike" },
      category: "category",
      subcategory: "subcategory",
      description1: "description1",
      description2: "description2",
      slug: "nike-air-force-1-mid-07",
      title: "Nike Air Force 1 Mid '07",
      poizonId: "524037W09E19000",
      price: 1414,
      sex: "female",
      images: [
        {
          responsiveImage: {
            sizes: "(max-width: 864px) 100vw, 864px",
            src: "https://www.datocms-assets.com/93063/1675053454-af1-07midwhite.webp?auto=format",
            width: 864,
            height: 1080,
            alt: "Кожаная курточка. ИЗМЕНИТЬ",
            title: null,
            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoIDg4NDg0PDhUSDQ0IDhENDQgOFx8ZGBYVFhUaHysjGh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLBQUFEAUFEC8cFhwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAEwMBIgACEQEDEQH/xAAZAAEAAgMAAAAAAAAAAAAAAAAAAwQBBQf/xAAaEAADAQADAAAAAAAAAAAAAAAAAQISBBEi/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOyW+pMbWCPkV0iDbwBirWmCrVvTAGw5JEp8AAU6n0wAB//Z"
          }
        }
      ]
    }))}>
      Добавить предмет в Redux
    </button>
  </div>)
}

export default TestRedux