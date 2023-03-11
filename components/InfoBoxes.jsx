import Image from 'next/image';
import React from 'react';

function Boxes() {
    return (
        <div className="p-8 grid grid-rows-2 grid-cols-2 md:w-3/4 mx-auto gap-x-6 gap-y-8 w-full font-roboto text-[#494949]">
            <div className="Box1 flex bg-[#CCE5D4] justify-between items-center rounded-xl px-4">
                <div className="stats">
                    <p className="italic text-4xl font-semibold">20+</p>
                    <p className="text-2xl tracking-wider mt-2 font-thin italic">Events Conducted</p>
                </div>
                <div className="line py-2">
                    <Image src="/spiral.svg" width={107} height={139} alt="line" />
                </div>
            </div>
            <div className="Box2  bg-[#F9B7A9] rounded-xl grid grid-cols-2 place-content-center place-items-center px-4 row-span-2">
                <p className='font-bold italic text-3xl'>Love to chat about anything anytime, design, work collabrations, or life...</p>
                <Image src="/Face.svg" width={107} height={139} alt="line" />
                <p className='text-[#CD4631] font-thin italic underline text-2xl cursor-pointer'>dscfetju@gmail.com</p>
                <div className='flex'>
                    <div className='circle rounded-lg bg-[#F9E0DB] w-[40px] h-[40px] flex items-center justify-center mr-1 cursor-pointer'>
                        <Image src='/social/instagram.svg' alt='fb' width={30} height={30} />
                    </div>
                    <div className='circle rounded-lg bg-[#F9E0DB] w-[40px] h-[40px] flex items-center justify-center mr-1 cursor-pointer'>
                        <Image src='/social/twitter.svg' alt='teitter' width={30} height={30} />
                    </div>
                    <div className='circle rounded-lg bg-[#F9E0DB] w-[40px] h-[40px] flex items-center justify-center mr-1 cursor-pointer'>
                        <Image src='/social/linkedin.svg' alt='fb' width={30} height={30} />
                    </div>
                </div>
            </div>
            <div className="Box1 flex bg-[#F9EAE1] justify-between items-center rounded-xl px-4">
                <div className="stats">
                    <p className="italic text-4xl font-semibold">2000+</p>
                    <p className="text-2xl tracking-wider mt-2 font-thin italic">Students</p>
                </div>
                <div className="line py-2">
                    <Image src="/Sparkle.svg" width={107} height={139} alt="sparkle" />
                </div>
            </div>
        </div>
    );
}

export default Boxes;
