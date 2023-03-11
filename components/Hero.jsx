import Image from 'next/image';
import React from 'react';
import heroImage from '../public/hero.gif';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Hero() {
  return (
    <div className="flex justify-around items-center p-10 ">
      <div className="left md:w-1/2 w-full text-justify    grid place-items-start place-content-center">
        <p className="text-xl font-roboto " >
          At Google Developer Student Clubs FET- Jain University we as a
          university based community functioning with an aim to promote
          peer-to-peer learning with an active usage of tools and technologies
          offered by Google. Here in the community, we learn and further our
          developers skills with an intent to abide by the idea of putting
          knowledge to practical use.
        </p>
        <button className="bg-blue-500 text-white px-10 py-2 rounded-lg font-semibold mt-5">
          <span className="mr-2">
            <InfoOutlinedIcon />
          </span>
          Join Us
        </button>
      </div>
      <div className="right w-1/3 md:block hidden">
        <Image src={heroImage} alt={'hero image'} className="w-full h-full" />
      </div>
    </div>
  );
}

export default Hero;
