"use client";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, deleteAll } from "@/lib/redux/slices/itemSlice";
import React from "react";


const TestRedux = () => {
  const dispatch = useDispatch();

  return (<div className="w-[100px] p-[10px] border bg-slate-500 rounded-sm absolute left-0 top-32">
    <button onClick={() => dispatch(addItem({
      item: {
        brand: { id: "1", name: "Nike" },
        category: "category",
        subcategory: "subcategory",
        description1: "description1",
        description2: "description2",
        slug: "nike-air-force-1-mid-07",
        title: "Nike Air Force 1 Mid '07",
        poizonArticul: "524037W09E19000",
        price: 1414,
        sex: "female",
        images: [{
          responsiveImage: {
            sizes: "(max-width: 864px) 100vw, 864px",
            src: "https://www.datocms-assets.com/93063/1675968198-af1-07midwhite-edited.png?auto=compress",
            width: 864,
            height: 607,
            alt: "Кожаная курточка. ИЗМЕНИТЬ",
            title: null,
            base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBg8IDg8KChYHDQwQCxIGChEJDRENFxMZGBYVIhUaHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLBQUFEAUFEC8cFhwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABEAGAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAABAMHAf/EABoQAAIDAQEAAAAAAAAAAAAAAAABAgMRMQT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7JKSitM43LTP0SeE0G2wKrr1gIrtAFfo4T19AA8vAAH/2Q=="
          }
        }],
        id: "141451" + Date.now(),
        color: "розовый",
        relatedItems: []
      },
      amount: 1,
      size: {
        available: [0, 1],
        chosen: 1,
        locale: "RU"
      }
    }))}>
      Добавить предмет в Redux
    </button>
  </div>)
}

export default TestRedux