// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImage from "../assets/images/sliderImage.png";

// Import Swiper styles
import "swiper/css";
const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
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
  );
};

export default Slider;
