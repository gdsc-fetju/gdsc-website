import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Testimonial = () => {
    const items = [
        <div key='1'>

        </div>,
        <div key='1'>ss</div>,
    ];

    return (
        <div className='p-8'>
            <h1 className='text-3xl mt-10 text-center text-[#49B165] font-bold tracking-wide'>Testimonials</h1>
            {/* <AliceCarousel mouseTracking items={items} disableButtonsControls={true} /> */}
            <div>

                <h1>Nikita Gandhi</h1>
                <p>Designer</p>
                <p>Developer</p>
                <p className=''>It is professional, considers everyone's time, can think about the whole problem and not only in a small niche, friendly, , and UX,UI.</p>
            </div>
        </div>
    )
}

export default Testimonial