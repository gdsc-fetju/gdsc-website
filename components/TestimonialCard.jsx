import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";

function TestimonialCard({ name, src, content, tags, url }) {
  return (
    <section
      className={`flex flex-col justify-center md:flex-row items-center py-10 mx-10 md:mx-56  md:border-google-blue md:border-2 md:p-5 my-10 rounded-xl`}
    >
      {/* Left Section */}
      <div>
        <Image
          src={src}
          width={200}
          height={200}
          className="rounded-full object-center aspect-square"
          alt={`${name} image`}
        ></Image>
      </div>
      {/* Right Section */}
      <div className="flex flex-col md:items-start items-center">
        <span className="text-2xl font-semibold">{name}</span>
        <div className="m-3 flex gap-4 items-center">
          {tags.map((tag, idx) => (
            <div key={idx}>
              <span className="my-1 text-[#4E8E70] px-3 py-1 bg-[#C3EAD7] rounded-md font-mulish">
                {tag}
              </span>
            </div>
          ))}
          <Link href={url}>
            <BsLinkedin className="text-lg text-google-blue" />
          </Link>
        </div>
        <p className="px-5 text-justify max-w-xl">{content}</p>
      </div>
    </section>
  );
}

export default TestimonialCard;
