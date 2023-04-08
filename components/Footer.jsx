import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section className=" p-10 m-10 rounded-lg  border-black border-2 text-center md:flex items-center  justify-around md:p-15">
      {/* left column */}
      <div className="left md:w-1/3 ">
        <h1 className="text-3xl mb-5 text-[#DB4437] font-bold ">About Us</h1>
        <p className="font-semibold mb-5">
          GDSC FET-JU is a community based out of Jain University Department of
          Computer Science and Engineering. We aim to deliver the best from
          Google to all{" "}
        </p>
      </div>

      {/* middle col */}
      <div className="middle md:w-1/3">
        <p className="text-[#0F9D58] text-3xl font-bold">Follow Us</p>
        <div className="links flex justify-center mb-5">
          <FooterImage imageName={"instagram"} />
          <FooterImage imageName={"linkedin"} />
          <FooterImage imageName={"twitter"} />
        </div>
        <h1 className="text-3xl font-bold text-[#4285F4] mb-3">Contact Us</h1>

        <p className="font-semibold">dscfetju@gmail.com</p>
        <p className="font-semibold">gdscfetju@gmail.com</p>
      </div>
      {/* right col */}
      <div className="right md:w-1/3">
        <Image
          src="/footer.svg"
          alt="footer image"
          height={300}
          width={300}
          className="mx-auto md:w-full md:h-full"
        />
      </div>
    </section>
  );
}

function FooterImage({ imageName }) {
  return (
    <span className="">
      <Image
        className="text-gray-500 m-2 cursor-pointer"
        src={`/social/${imageName}.svg`}
        height={25}
        width={25}
        alt={`${imageName} icon`}
      />
    </span>
  );
}

export default Footer;
