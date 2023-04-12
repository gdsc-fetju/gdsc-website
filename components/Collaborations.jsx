import Image from "next/image";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Collaborations() {

  const [isInfinite, setIsInfinite] = useState(false);

  useEffect(() => {
    setIsInfinite(true)
  }, [])


  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <Image src="/collabrations/cambridge.png" alt="cambridge" key="1" width={270} height={100} />,
    <Image src="/collabrations/mait.png" alt="mait" key="2" width={270} height={100} />,
    <Image src="/collabrations/donbosco.png" alt="donbosco" key="3" width={270} height={100} />,
    <Image src="/collabrations/iiitb.png" alt="iiitb" key="4" width={270} height={100} />,
    <Image src="/collabrations/lpu.png" alt="lpu" key="5" width={270} height={100} />,
    <Image src="/collabrations/pillai.png" alt="pillai" key="6" width={270} height={100} />,
    <Image src="/collabrations/gurunanak.png" alt="gurunanak" key="7" width={270} height={100} />,
  ];

  return (
    <div className="p-10 mb-14 mt-4">
      <h1 className="text-google-green font-bold text-4xl text-center">
        Our Collaborations
      </h1>
      <div className="mt-12 p-4 flex items-center justify-center">
        <AliceCarousel
          disableDotsControls={true}
          responsive={responsive}
          items={items}
          autoPlay={true}
          autoPlayInterval={1000}
          infinite={isInfinite}
          disableButtonsControls={true}
        />
      </div>
    </div>
  );
}

export default Collaborations;
