import Link from "next/link";
import React from "react";

function ProjectSection() {
  return (
    <div
      id="project-container"
      className="border-2 border-google-red rounded-2xl md:p-5 m-10"
    >
      <div id="projects" className="relative bottom-32"></div>
      <div className="bg-center p-10 md:p-20 flex flex-col items-center mx-auto ">
        <h1 className="text-xl md:text-3xl font-bold md:font-semibold text-google-yellow">
          Have A Project In Mind? Let&apos;s Get Started
        </h1>
        <p className="text-md mt-3 text-google-black font-mulish">
          Are you looking for a solid partner for the project that you have in
          your mind.
        </p>
        <p className="text-md text-google-black">
          Connect with us to make your work easier.
        </p>
        <Link href="https://discord.gg/H94GW8APQF" target="_blank">
          <button className="mt-4 px-6 py-3 bg-google-blue text-white text-md rounded-xl flex items-center active:ring-2  hover:bg-blue-500 transition-all ease-in-out font-mulish font-bold">
            Get Started!
          </button>
        </Link>
      </div>
      <style jsx>{`
        #project-container {
          background-image: url("/projectbg.svg");
          background-size: cover;
          background-position: center;
        }
        @media (max-width: 640px) {
          #projects {
            background-size: contain;
            background-position: top;
            background-image: none; /* hide the background image */
          }
        }
      `}</style>
    </div>
  );
}

export default ProjectSection;
