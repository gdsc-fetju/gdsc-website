import Image from 'next/image';
import React from 'react';

function Boxes() {
  return (
    <div className="p-8 grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 md:w-3/4 mx-auto gap-x-6 gap-y-8 w-full font-open-sans text-black">
      <div className="Box1 flex bg-green-600   justify-between items-center rounded-xl px-4 border border-black">
        <div className="stats">
          <p className=" text-4xl text-white font-semibold">40+</p>
          <p className="text-2xl tracking-wider mt-2 font-medium italic">
            Events Conducted
          </p>
        </div>
        <div className="line py-2">
          <Image src="/Line.png" width={107} height={139} alt="line" />
        </div>
      </div>
     <div className="Box2 bg-yellow-400 border border-black rounded-xl grid grid-cols-1 sm:grid-cols-2 p-6 place-items-center row-span-2">
       <p className="font-bold  text-white text-2xl md:text-4xl lg:text-5xl tracking-wide">
          Love to chat about anything
        </p>
        <Image
          className="hidden sm:block"
          src="/Face.svg"
          width={107}
          height={139}
          alt="line"
        />
        <p className=" md:hidden lg:block font-thin italic underline text-2xl cursor-pointer">
          dscfetju@gmail.com
        </p>
        <div className="flex">
          <div className="circle rounded-lg [40px] h-[40px] flex items-center justify-center mr-1 cursor-pointer">
           <a href="https://www.instagram.com/gdscfetju/www.instagram.com"> 
            <Image
              src="/social/instagram.svg"
              alt="fb"
              width={30}
              height={30}
            />
            </a>
          </div>
          <div className="circle rounded-lg w-[40px] h-[40px] flex items-center justify-center mr-1 cursor-pointer">
            <a href="https://twitter.com/gdscfetju">
  <Image
    src="/social/twitter.svg"
    alt="twitter"
    width={30}
    height={30}
  />
</a>

          </div>

          <div className="circle rounded-lg bg-yellow w-[40px] h-[40px] flex items-center justify-center mr-1 cursor-pointer">
            <a href="https://www.linkedin.com/company/gdsc-fet-ju/">
            <Image src="/social/linkedin.svg" alt="fb" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="Box1 flex bg-blue-600 justify-between items-center rounded-xl px-4 border border-black   ">
   
        <div className="stats">
          <p className=" text-4xl text-white font-semibold">2000+</p>
          <p className="text-2xl tracking-wider mt-2 font-medium italic">
            Students
          </p>
        </div>
        <div className="line py-2">
          <Image src="/Sparkle.png" width={107} height={139} alt="sparkle" />
        </div>
      </div>
    </div>
  );
}

export default Boxes;
