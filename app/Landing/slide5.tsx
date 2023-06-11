"use client";
import React from "react";
import styles4 from "./styles/slide4.module.css";
import styles5 from "./styles/slide5.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// import carbon_delivery_parcel from "@/public/main-images/carbon_delivery-parcel.svg"
import "swiper/css";
import "swiper/css/pagination";


const reviews = [{
	name: "Максим",
	text: "Заказал у FLYBOOTS кроссовки мечты, все прошло отлично!"
}, {
	name: "Александра",
	text: "Быстрая доставка, учитывая, что заказ идет из заграницы. Буду заказывать еще!"
}, {
	name: "Михаил",
	text: "Очень удобная платформа для заказа, долго искал одну модель кроссовок - нашел у FLYBOOTS"
}, {
	name: "Никита",
	text: "Заказал у FLYBOOTS кроссовки мечты, все прошло отлично!"
}, {
	name: "Александра #2",
	text: "Быстрая доставка, учитывая, что заказ идет из заграницы. Буду заказывать еще!"
}, {
	name: "Михаил #2",
	text: "Очень удобная платформа для заказа, долго искал одну модель кроссовок - нашел у FLYBOOTS"
}, {
	name: "Максим #3",
	text: "Заказал у FLYBOOTS кроссовки мечты, все прошло отлично!"
}, {
	name: "Александра #3",
	text: "Быстрая доставка, учитывая, что заказ идет из заграницы. Буду заказывать еще!"
}]

function Slide5() {
	return <section className='w-full mt-20 mb-[185px]'>
		<h2 className={styles4.h2 + ` 
            max-[1920px]:!text-[4rem]
            noto_offer text-center
            max-[1500px]:!text-[3.7rem] 
            max-[1330px]:!text-[3.3rem]
            max-[1300px]:!leading-[55px] 
            max-[1140px]:!text-[3rem] 
            max-[1100px]:!text-[2.7rem]
            max-[950px]:!text-[2.5rem]
            max-[900px]:!leading-[45px] 
            max-[800px]:!leading-[40px]
            max-[700px]:!leading-[35px] 
            max-[400px]:!leading-[30px]
            max-[850px]:!text-[2.3rem]
            max-[780px]:!text-[2.1rem]
            max-[700px]:!text-[1.9rem]
            max-[650px]:!text-[1.7rem]
            max-[600px]:!text-[2.6rem]
            max-[550px]:!text-[2.4rem]
            max-[525px]:!text-[2.2rem]
            max-[480px]:!text-[2rem]
            max-[420px]:!text-[1.8rem]
            max-[380px]:!text-[1.6rem]
            max-[335px]:!text-[1.4rem]`}>
			ваши <b>отзывы</b>
		</h2>

		<div className="px-[calc(5vw-30px)]">
			<Swiper
				// loop
				breakpoints={{
					"0": { slidesPerView: "auto" },
					"600": { slidesPerView: 2, slidesPerGroup: 2 },
					"900": { slidesPerView: 3, slidesPerGroup: 3 },
				}}
				pagination={{
					el: `.${styles5["pagination"]}`,
					bulletActiveClass: styles5['pagination-bullet-active'],
					bulletClass: styles5['pagination-bullet'],
					clickable: true,
					renderBullet: (_, className) => `<span class="${className}"></span>`,
				}}
				modules={[Pagination]}
			>
				{reviews.map((review, i) =>
					<SwiperSlide key={i}>
						<article className='flex flex-col mx-[30px] justify-evenly px-[5%] shadow-[0px_13px_30px_rgba(0,0,0,0.07)] my-[50px] shadow_border rounded-[10px] bg-[#fff] min-h-[200px]'>
							<p className={styles4.hiw_list + ` 
							noto_offer
							px-5
							mb-5
							text-black
							text-start
							max-[2000px]:!text-[24px] 
							max-[2000px]:!leading-[25px]
							max-[1700px]:!text-[20px]
							max-[1100px]:!text-[16px] 
							max-[850px]:!text-[14px] 
							max-[780px]:!text-[12px] 
							max-[600px]:!text-[16px]
							max-[1100px]:!leading-[17px]
							`}>
								{review.text}
							</p>
							<p className="text-end">{review.name}</p>
						</article >
					</SwiperSlide >)}
			</Swiper>
		</div>
		<div className={`${styles5["pagination"]} grid justify-center mt-[23px]`} />
	</section>
}
export default Slide5
