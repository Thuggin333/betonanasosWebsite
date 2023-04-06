import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider/sliderHome.css";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

const Carousel = () => {
  return (
    <Swiper
      cssMode
      navigation
      pagination
      mousewheel
      keyboard
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" />
      </SwiperSlide>s
    </Swiper>
  );
};

export default Carousel;