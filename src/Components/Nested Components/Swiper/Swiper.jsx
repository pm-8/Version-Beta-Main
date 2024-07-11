import "./Swiper.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#6054aa",
        }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/Images/img1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img2.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img3.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img4.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img5.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img6.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img7.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/img8.jpeg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
