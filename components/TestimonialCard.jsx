import Image from 'next/image'
import React from 'react'

const TestimonialCard = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="left">
                <Image src='/hello.png' alt='image' width={200} height={200} className='rounded-full' />
            </div>
            <div className='right ml-4'>
                <div className='flex justify-between w-2/3'>
                    <div className="left">
                        <h1 className='font-semibold mb-2 text-3xl'>Nikita Gandhi</h1>
                        <div className='flex text-sm'>
                            <p className='mr-1 text-[#4E8E70] px-3 py-2 bg-[#C3EAD7] rounded-md'>Designer</p>
                            <p className='text-[#62989C] px-3 py-2 bg-[#C3E7EA] rounded-md'>Developer</p>
                        </div>
                    </div>
                    <div className="right">
                        <Image src='/quote.svg' width={30} height={30} alt='quote' className='' />
                    </div>
                </div>
                <p className='italic font-light w-2/3 mt-3 text-[#525665] text-xl'>&quot; It is professional, considers everyone&apos;s time, can think about the whole problem and <span className='text-[#7AA3F3] font-bold'>not only in a small niche</span>, friendly, and UX,UI.&quot;</p>
            </div>
        </div>
    )
}

export default TestimonialCard