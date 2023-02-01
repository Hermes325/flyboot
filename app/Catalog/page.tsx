import { CatalogBrandsAndCategories, getCatalogBrandsAndCategories, getCatalogItems } from "@/lib/datocms";
import React, { use } from "react";

function Catalog() {

  // TODO: передать статические категории и первую страница без фильтров
  const catalogMeta = use(getCatalogBrandsAndCategories())
  // const catalog = use(getCatalogItems(
  //   0,
  //   req.body["orderBy"],
  //   catalogMeta.brands.map(x => x.name),
  //   catalogMeta.category.categoryJson,
  //   req.body["minPrice"],
  //   req.body["maxPrice"]);
  // TODO: в дочернем компоненте "use client" + динамические фильтры
  // useEffect(async () => {
  //   const brandsAndCats = await getCatalogBrandsAndCategories()
  //   const   
  //   return () => {
  //     second
  //   }
  // }, [third])


  return (
    <div className="w-screen h-screen flex justify-center pt-[72px]">
      <div className="w-full h-full max-w-[1200px] flex flex-row">
        <div className="flex flex-col w-[250px]">
          {/* Sort Filter UI */}
          <div className="">
            <label
              htmlFor="Sort by price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Выберите сортировку по цене
            </label>
            <select
              id="Price selector"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected value="Ascending prices">
                По возрастанию цены
              </option>
              <option value="Descending prices">По убыванию цены</option>
            </select>
          </div>
          {/* Price Filter UI*/}
          <div className="">Price Filter UI</div>
          {/* Category Filter UI*/}
          <div className="">
            <div className="flex justify-center">
              <div>
                <h1>Категория</h1>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexCheckDefault"
                  >
                    Обувь
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexCheckChecked"
                  >
                    Одежда
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexCheckChecked"
                  >
                    Аксессуары
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Brand Filter UI*/}
          <div className="">
            <div className="flex justify-center">
              <div>
                <h1>Бренды</h1>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexCheckDefault"
                  >
                    Rick Owens
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexCheckChecked"
                  >
                    Yeezy
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexCheckChecked"
                  >
                    Louis Vuitton
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Catalog */}
        <div className="">

        </div>
      </div>
    </div>
  );
}

export default Catalog;
