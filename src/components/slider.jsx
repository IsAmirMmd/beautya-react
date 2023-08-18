// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import sliderImage from "../assets/images/sliderImage.png";

// Import Swiper styles
import "swiper/css";
const Slider = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="[&>*]:brightness-50"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={sliderImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImage} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
