import Image from 'next/image';
import React from 'react';

function Boxes() {
  return (
    <div className="p-8 grid grid-rows-2 grid-cols-2 md:w-3/4 mx-auto gap-x-6 gap-y-8 w-full">
      <div className="Box1 flex bg-[#CCE5D4] justify-between items-center rounded-xl px-4">
        <div className="stats">
          <p className="italic text-4xl font-semibold">20+</p>
          <p className="text-xl tracking-wide mt-2">Events Conducted</p>
        </div>
        <div className="line py-2">
          <Image src="/spiral.svg" width={107} height={139} alt="line" />
        </div>
      </div>
      <div className="Box2 flex bg-[#F9B7A9] justify-around items-center px-4 row-span-2"></div>
      <div className="Box1 flex bg-[#F9EAE1] justify-between items-center rounded-xl px-4">
        <div className="stats">
          <p className="italic text-4xl font-semibold">2000+</p>
          <p className="text-xl tracking-wide mt-2">Students</p>
        </div>
        <div className="line py-2">
          <Image src="/spiral.svg" width={107} height={139} alt="line" />
        </div>
      </div>
    </div>
  );
}

export default Boxes;
