import "./electronics.css";
import "../tailwind.css";
import React, { useState } from 'react';
import { ThumbProduct } from "./thumbproduct";
import { MiniThumbProduct } from "./minithumbproduct";
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
export const Electronics = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="pt-5 pb-5">
      <div className="position-relative electronics-body">
        <div className="fancy">
          <h3 className="electronics-title">Electronics</h3>
        </div>
        <div className="d-flex flex-wrap electronics-swiper-body p-3 shadow-md d-flex">


          <Swiper
            style={{
              '--swiper-navigation-color': '#f93423',
              '--swiper-pagination-color': '#f93423',
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}

            modules={[FreeMode, Navigation, Thumbs]}
            className="electronic-swiper   shadow-md" >
            <SwiperSlide >
              <ThumbProduct />
            </SwiperSlide>
            <SwiperSlide >
            <ThumbProduct />
            </SwiperSlide>
            <SwiperSlide >
            <ThumbProduct />
            </SwiperSlide>
            <SwiperSlide >
            <ThumbProduct />
            </SwiperSlide>
            <SwiperSlide >
            <ThumbProduct />
            </SwiperSlide>

          </Swiper>
          <Swiper
            direction={'vertical'}
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={7}
            freeMode={true}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}

            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Mousewheel, Pagination]}

            className="electronic-swiper-child" >
            <SwiperSlide className="electronic-swiper-children">
              <MiniThumbProduct />
            </SwiperSlide>
            <SwiperSlide className="electronic-swiper-children">
            <MiniThumbProduct />
            </SwiperSlide>
            <SwiperSlide className="electronic-swiper-children">
            <MiniThumbProduct />
            </SwiperSlide>
            <SwiperSlide className="electronic-swiper-children">
            <MiniThumbProduct />
            </SwiperSlide>
            
            <SwiperSlide className="electronic-swiper-children">
            <MiniThumbProduct />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}