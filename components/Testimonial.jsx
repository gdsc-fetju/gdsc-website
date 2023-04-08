import React from "react";
import AliceCarousel from "react-alice-carousel";
import TestimonialCard from "./TestimonialCard";

import "react-alice-carousel/lib/alice-carousel.css";

function Testimonial() {
  const items = [
    <TestimonialCard key="1" />,
    <TestimonialCard key="2" />,
    <TestimonialCard key="3" />,
    <TestimonialCard key="4" />,
  ];

  return (
    <div className="p-8 font-open-sans">
      <h1 className="text-5xl mt-10 text-center text-[#49B165] font-bold tracking-wide">
        Testimonials
      </h1>

      <div className="mt-10">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls={true}
        />
      </div>
    </div>
  );
}

export default Testimonial;
