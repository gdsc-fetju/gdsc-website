import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import TestimonialCard from "./TestimonialCard";
const testimonialData = [

  {
    name: 'Tushar Vilekar',
    content: `The outreach efforts of GDSC FET JU have been exceptional, with the club's activities having a tangible impact on the wider community.The 2022-23 session saw a lot of active and successful collaborations with GDSC FET JU in terms of Organizers CompeteNCompose (An online hackathon on a national level) and National Organizers ofGDSC WoW(Wonder of Wonders).The club has taken an active role in organizing events, workshops, and seminars, and I am confident that the club's efforts will continue to bear fruit in the years to come.`,
    tags: ['GDSC Lead LPU', 'Developer', 'Student'],
    src: '/testimonialImages/tushar.jpg',
    url: 'https://www.linkedin.com/in/tushar-vilekar-8556701b3/'
  },
  {
    name: 'Prnika Bakshi',
    content: `I remember how it started and how it’s going now I feel really happy that our university have got a cut edge ecosystem wherein all the students have got the opportunity to get that culture,they are learning new things which will help them to be fit in this competitive environment. This year GDSC group has worked a lot I really would like to appreciate Birat and his whole team who has helped in achieving this bar especially in our university the way all the sessions every month used to be organised and lot many things have given an exposure to all the students to learn not only coding but much more than that! Looking forward for this group to grow more in coming years to make our university more proud with all rounder students.`,
    tags: ['GDSC Lead', 'Microsoft'],
    src: '/testimonialImages/prnika.jpeg',
    url: 'https://www.linkedin.com/in/prnika-bakshi-562654167'
  },
  {
    name: 'Bhumika Chopra',
    content: `The potential this community offers are limitless. The ongoing encouragement, inspiration, and support from such outstanding people make the experience worthwhile. Working with such excellent leaders, and organising events and hackathons together is simply incredible.`,
    tags: ['GDSC LEAD MAIT'],
    src: '/testimonialImages/bhumika.jpg',
    url: 'https://www.linkedin.com/in/bhumika-chopra-673951203'
  },
]


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
          autoplay={{ delay: 2500 }}
        >
          {testimonialData.map((data, idx) =>
            <SwiperSlide key={idx} >
              <TestimonialCard {...data} borderColor={colors[idx % colors.length]} />
            </SwiperSlide>
          )}

        </Swiper>
      </div>
    </>
  );
}

// export default Testimonial;
