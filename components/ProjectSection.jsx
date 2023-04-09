import Link from "next/link";
import React from "react";

function ProjectSection() {
  return (
    <div
      id="projects"
      className="border-2 border-google-red rounded-2xl md:p-5 m-10"
    >
      <div className="md:bg-[url(/projectbg.svg)] bg-center p-10 md:p-20 flex flex-col items-center mx-auto ">
        <h1 className="text-xl md:text-3xl font-bold md:font-semibold text-google-yellow">
          Have A Project In Mind? Let&apos;s Get Started
        </h1>
        <p className="text-md mt-3 text-google-black font-mulish">
          Are you looking for a solid partner for the project having in your
          mind.
        </p>
        <p className="text-md text-google-black">
          Connect with us to make your work easier.
        </p>
        <Link href="https://discord.gg/H94GW8APQF" target="_blank">
          <button className="mt-4 px-6 py-3 bg-[color:var(--google-blue)] text-white text-md rounded-xl flex items-center active:ring-2 hover:bg-[color:var(--google-dark-blue)] transition-all ease-in-out font-mulish font-bold">
            Get Started!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectSection;
