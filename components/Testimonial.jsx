import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TestimonialCard from "./TestimonialCard";
const testimonialData = [
  {
    name: "Tushar Vilekar",
    content: `GDSC FET JU has made exceptional outreach efforts and had a tangible impact on the community with successful collaborations and organized events, workshops, and seminars. The club's efforts are expected to continue to bear fruit in the future.`,
    tags: ["Lead LPU", "Developer", "Student"],
    src: "/testimonialImages/tushar.jpg",
    url: "https://www.linkedin.com/in/tushar-vilekar-8556701b3/",
  },
  {
    name: "Prnika Bakshi",
    content:
      "I'm really happy with the cutting-edge ecosystem at our university that provides opportunities for all students to learn and grow in a competitive environment. The GDSC group, led by Birat and his team, has done an excellent job organizing monthly sessions and giving exposure to coding and other skills, and I look forward to their continued growth and success in the future.",
    tags: ["Lead", "Microsoft"],
    src: "/testimonialImages/prnika.jpeg",
    url: "https://www.linkedin.com/in/prnika-bakshi-562654167",
  },
  {
    name: "Bhumika Chopra",
    content: `The potential this community offers are limitless. The ongoing encouragement, inspiration, and support from such outstanding people make the experience worthwhile. Working with such excellent leaders, and organising events and hackathons together is simply incredible.`,
    tags: ["LEAD MAIT"],
    src: "/testimonialImages/bhumika.jpg",
    url: "https://www.linkedin.com/in/bhumika-chopra-673951203",
  },
];

const colors = [`#428eff`, `#ff5145`, `#ffbb01`];
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
          loop={true}
          navigation
          draggable={false}
          pagination
          grabCursor={false}
          autoplay={{ delay: 4000 }}
        >
          {testimonialData.map((data, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard
                {...data}
                borderColor={colors[idx % colors.length]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

// export default Testimonial;
