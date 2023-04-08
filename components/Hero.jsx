import Image from "next/image";
import React from "react";
import heroImage from "../public/hero.gif";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Hero() {
  return (
    <div className="flex justify-around items-center ">
      <div className="left md:w-1/2 w-full text-justify grid place-items-start place-content-center">
        <div className="flex justify-around items-center p-10">
          <Image
            className="sm:hidden"
            src="/logo.png"
            width={500}
            height={500}
            alt="heroImage"
          />
        </div>
        <p className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide leading-7 sm:leading-8 md:leading-9">
          At{" "}
          <span className="text-blue-500 text-base sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Google{" "}
          </span>{" "}
          <span className="text-green-500 text-base sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Developer{" "}
          </span>{" "}
          <span className="text-red-500 text-base sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Student{" "}
          </span>{" "}
          <span className="text-yellow-500 text-base sm:text-lg md:text-xl lg:text-2xl">
            {" "}
            Clubs{" "}
          </span>{" "}
          FET- Jain University we as a university based community functioning
          with an aim to promote peer-to-peer learning with an active usage of
          tools and technologies offered by Google. Here in the community, we
          learn and further our developers skills with an intent to abide by the
          idea of putting knowledge to{" "}
          <span className="text-black text-base sm:text-lg md:text-xl lg:text-2xl">
            practical use
          </span>
          .
        </p>

        <a
          href=" https://linktr.ee/gdscfetju"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-blue-500 hover:bg-blue-600 focus:outline-none text-white px-10 py-2 rounded-lg font-semibold mt-5 shadow-md border border-black"
            style={{ boxShadow: "0 0 5px 1px rgba(255, 255, 255, 1)" }}
          >
            <span className="mr-2">
              <InfoOutlinedIcon />
            </span>
            Join Us
          </button>
        </a>
      </div>
      <div className="right w-1/3 md:block hidden">
        <Image src={heroImage} alt={"hero image"} className="w-full h-full" />
      </div>
    </div>
  );
}

export default Hero;
