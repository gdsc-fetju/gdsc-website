import Image from "next/image";
import React from "react";

function Footer() {
  const footerData = [
    {
      imageName: "instagram",
      url: "https://www.instagram.com/gdscfetju",
    },
    {
      imageName: "linkedin",
      url: "https://www.linkedin.com/company/gdsc-fet-ju/",
    },
    {
      imageName: "twitter",
      url: "/",
    },
  ];

  return (
    <section className="p-10 m-1 md:m-10 rounded-3xl border-google-blue border-2 text-center md:flex items-center justify-around md:p-15">
      {/* left column */}
      <div className="left md:w-1/3">
        <h1 className="text-3xl mb-5 text-google-red font-bold">About Us</h1>
        <p className="font-semibold mb-5">
          GDSC FET-JU is a community based out of Jain University Department of
          Computer Science and Engineering. We aim to deliver the best from
          Google to all.
        </p>
        <div className="visit-us">
          <h1 className="text-3xl font-bold text-google-yellow mb-3">
            Visit Us
          </h1>
          <p className="font-semibold">
            JAIN (Deemed-to-be-university), Faculty of Engineering and
            Technology
          </p>
          <p className="font-semibold">Bengaluru, Karnataka 562112</p>
        </div>
      </div>

      {/* middle col */}
      <div className="middle md:w-1/3">
        <p className="text-google-green text-3xl font-bold">Follow Us</p>
        <div className="links flex justify-center mb-5">
          {footerData.map((data, idx) => (
            <FooterImage imageName={data.imageName} key={idx} url={data.url} />
          ))}
        </div>
        <h1 className="text-3xl font-bold text-google-blue mb-3">Contact Us</h1>

        <p className="font-semibold">dscfetju@gmail.com</p>
        <p className="font-semibold">support@gdscfetju.co</p>
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

function FooterImage({ imageName, url }) {
  return (
    <span>
      <Image
        className="text-gray-500 m-2 cursor-pointer"
        src={`/social/${imageName}.svg`}
        height={25}
        onClick={() => window.open(url, "_blank")}
        width={25}
        alt={`${imageName} icon`}
      />
    </span>
  );
}

export default Footer;
