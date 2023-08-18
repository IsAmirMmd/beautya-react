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

const imageForSlider = [
  { src: sliderImage, id: 1 },
  { src: sliderImage, id: 2 },
  { src: sliderImage, id: 3 },
  { src: sliderImage, id: 4 },
];

const Slider = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {imageForSlider.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <img src={image.src} alt={image.id} className="brightness-50" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
