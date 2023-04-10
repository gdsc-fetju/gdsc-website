import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  return (
    <>
      <h1 className="text-4xl text-center font-bold text-google-yellow">
        Testimonials
      </h1>
      <div className="flex justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          draggable={false}
          pagination
          grabCursor={true}
          autoplay={{ delay: 2500 }}
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

// export default Testimonial;
