import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TestimonialCard from './TestimonialCard';

function Testimonial() {
  const items = [
    <TestimonialCard key="1" />,
    <TestimonialCard key="2" />,
    <TestimonialCard key="3" />,
    <TestimonialCard key="4" />,
  ];

  return (
    <div className="p-8 font-open-sans">
  <h1 className="text-5xl mt-10 text-center text-[#49B165] font-bold tracking-wide">
    Testimonials
  </h1>

  <div className="mt-10">
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls={true}
    />
    
      {/* <div className='flex justify-center'>
                <div className="left">
                    <Image src='/hello.png' alt='image' width={150} height={150} className='rounded-full' />
                </div>
                <div className='right ml-4'>
                    <div className='flex justify-between w-2/3'>
                        <div className="left">
                            <h1 className='font-semibold mb-2 text-2xl'>Nikita Gandhi</h1>
                            <div className='flex text-sm'>
                                <p className='mr-1 text-[#4E8E70] px-3 py-1 bg-[#C3EAD7] rounded-md'>Designer</p>
                                <p className='text-[#62989C] px-3 py-1 bg-[#C3E7EA] rounded-md'>Developer</p>
                            </div>
                        </div>
                        <div className="right">
                            <Image src='/quote.svg' width={30} height={30} alt='quote' className='' />
                        </div>
                    </div>
                    <p className='italic font-light w-2/3 mt-3 text-[#525665]'>"It is professional, considers everyone's time, can think about the whole problem and <span className='text-[#7AA3F3] font-bold'>not only in a small niche</span>, friendly, , and UX,UI."</p>
                </div>
            </div> */}
    </div>
    </div>
  );
}

export default Testimonial;
