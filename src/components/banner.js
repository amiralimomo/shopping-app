import "./banner.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';
import sliderimage from "../assets/images/sp_online_phone82_generated.jpg";
import sliderimage2 from "../assets/images/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_4299835.jpg";
export const Banner=()=>{

    return(
       <section className="mt-5 mb-5 rounded-lg">
          <Swiper autoplay={{
          delay: 2500,
         
          disableOnInteraction: false,
        }}  speed={800} pagination={true} modules={[Pagination,Autoplay]} className="mySwiper">
        <SwiperSlide><img className="rounded-lg" src={sliderimage} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={sliderimage2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={sliderimage} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={sliderimage2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-lg" src={sliderimage} alt="" /></SwiperSlide>
      </Swiper>
      
       </section>
    )
}