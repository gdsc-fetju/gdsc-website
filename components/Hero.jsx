import Image from "next/image";
import React from "react";
import heroImage from "../public/hero.gif";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex items-center justify-around ">
      <div id="about" className="relative bottom-64"></div>
      <div className="grid w-full p-10 text-justify md:p-0 md:w-1/2 place-items-start place-content-center">
        <div className="flex items-center justify-center p-10 md:justify-around">
          <Image
            className="sm:hidden"
            src="/logo.png"
            width={500}
            height={500}
            alt="heroImage"
          />
        </div>
        <p className="text-base font-normal leading-7 tracking-wide sm:text-lg md:text-xl lg:text-2xl sm:leading-8 md:leading-9">
          At
          <span className="text-base font-semibold text-google-blue sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Google
          </span>
          <span className="text-base font-semibold text-google-green sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Developer
          </span>
          <span className="text-base font-semibold text-google-red sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Student
          </span>
          <span className="text-base font-semibold text-google-yellow sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Clubs{" "}
          </span>
          FET- Jain University we as a university based community functioning
          with an aim to promote peer-to-peer learning with an active usage of
          tools and technologies offered by Google. Here in the community, we
          learn and further our developers skills with an intent to abide by the
          idea of putting knowledge to practical use.
        </p>

        <Link
          href="https://links.gdscfetju.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center px-10 py-2 mt-3 font-semibold text-white bg-blue-500 border rounded-lg hover:bg-blue-600 focus:outline-none md:mt-5 border-google-black">
            Join Us
          </button>
        </Link>
      </div>
      <div className="hidden w-1/3 right md:block">
        <Image src={heroImage} alt={"hero image"} className="w-full h-full" />
      </div>
    </div>
  );
}

export default Hero;
