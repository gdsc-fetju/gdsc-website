import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Collabrations() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <Image src="/logo.png" alt="gdscfetju" key="1" width={270} height={100} />,
    <Image src="/logo.png" alt="gdscfetju" key="2" width={270} height={100} />,
    <Image src="/logo.png" alt="gdscfetju" key="3" width={270} height={100} />,
    <Image src="/logo.png" alt="gdscfetju" key="4" width={270} height={100} />,
    <Image src="/logo.png" alt="gdscfetju" key="5" width={270} height={100} />,
    <Image src="/logo.png" alt="gdscfetju" key="6" width={270} height={100} />,
  ];

  return (
    <div className="p-10 mb-14 mt-4">
      <h1 className="text-[#E2425C] font-fraunces font-bold text-4xl text-center">
        Our Collabrations
      </h1>
      <div className="mt-12 p-4 flex items-center justify-center">
        <AliceCarousel
          disableDotsControls={true}
          responsive={responsive}
          items={items}
          autoPlay={true}
          autoPlayInterval={1100}
          infinite
          disableButtonsControls={true}
        />
      </div>
    </div>
  );
}

export default Collabrations;
