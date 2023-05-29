import { Item } from "@/lib/datocms";
import Link from "next/link";
import React from "react";
import { Image } from "react-datocms/image";

type Props = {
  items: Item[];
  setOpen?: any;
};

const HeaderSearchList = ({ items, setOpen }: Props) => {
  return (
    <div className="w-full
    grid
    grid-cols-4 
    max-[600px]:grid-cols-2
    max-h-[600px] 
    max-[1600px]:max-h-[500px] 
    max-[1080px]:max-h-[400px] 
    max-[720px]:max-h-[300px] 
    max-[600px]:max-h-[400px] 
    overflow-y-scroll
    overflow-x-hidden
    ">
      {items.map((item) => (
        <div key={item.slug} className="py-3 mx-5">
          <Link href={`/item/${item.slug}`} onClick={setOpen}>
            <div className="bg-white flex flex-col w-full justify-start items-center h-full rounded-[5px]">
              {/* <div className="flex flex-row space-x-5"> */}
              <Image
                lazyLoad={true}
                data={item.images[0].responsiveImage}
                objectFit={"contain"}
                className="
                !h-[128px]
                max-[1600px]:!h-[96px]
                max-[1080px]:!h-[64px] 
                max-[720px]:!h-[44.797px]
                !w-[200px]
                max-[1600px]:!w-[150px]
                max-[1080px]:!w-[100px] 
                max-[720px]:!w-[70px]
                !max-h-[200px]
                !max-w-[200px]"
              />
              <h1 className="
              flex 
              justify-center 
              items-center 
              font-medium 
              text-center
              max-[1920px]:!text-[14px] 
              max-[1015px]:!text-[10px] 
              max-[835px]:!text-[8px] 
              max-[835px]:!leading-[19px] 
              max-[775px]:!mt-[2vw] 
              max-[710px]:!text-[8px] 
              max-[660px]:!leading-[137%]
              max-[400px]:!leading-[14px]     
              max-[1080px]:text-base 
              max-[720px]:text-sm w-[300px]
              max-[1600px]:w-[250px]
              max-[1080px]:w-[200px] 
              max-[720px]:w-[150px]">
                {item.title}
              </h1>
              {/* </div> */}

              {/* <p className="flex justify-center items-center whitespace-nowrap font-medium text-2xl max-[1080px]:text-xl">
                {item.price}руб
              </p> */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeaderSearchList;
