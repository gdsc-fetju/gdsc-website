import Image from 'next/image'
import React from 'react'

const NewsLetter = () => {
    return (
        <div className=' justify-around py-8 px-3 text-center items-center  bg-[#F5F4F4] md:flex '>
            <div className="left md:w-1/2">
                <h1 className='text-4xl my-2 font-semibold md:my-0'>Join Our Newsletter</h1>
                <p className='mb-8 md:mt-1  md:text-right md:mr-10 italic'>latest information at your fingertips!</p>

                <form className='bg-white rounded-2xl 
                w-3/4 mx-auto
                px-4 shadow-3xl  md:px-7 md:py-3'>
                    <input type="email" className='rounded-lg py-4 outline-none w-2/3' placeholder='Enter your email' />
                    <button type='submit' className='bg-[#4285f4] rounded-2xl px-2 py-2 text-sm text-center text-white  w-1/3 hover:shadow-lg md:py-4 md:text-base'>Subscribe</button>
                </form>
            </div >
            <div className='right'>
                <Image src='/newsletter.svg' alt='' height={300} width={300} className='hidden md:block ' />
            </div>
        </div >
    )
}

export default NewsLetter