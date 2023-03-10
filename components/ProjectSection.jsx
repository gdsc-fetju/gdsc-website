import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';
const ProjectSection = () => {
    return (
        <div className='bg-[url(/project_bg.svg)] p-20 flex flex-col items-center mx-auto ' >
            <h1 className='text-xl md:text-3xl font-bold md:font-semibold font-fraunces'>Have A Project In Mind? Let&apos;s Get Start.</h1>
            <p className='text-md mt-3 text-[#525665] font-mulish'>You&apos;re looking for a solid partner for the project having in your mind.</p>
            <p className='text-md text-[#525665]'>Connect with us to make your work easier.</p>
            <button className='mt-4 px-6 py-3 bg-orange-500 text-white text-md rounded-xl flex items-center active:ring-2 hover:bg-orange-600 transition-all font-mulish font-bold'>

                <span>Get Started</span>
                <CallMadeIcon className='ml-1' />
            </button>
        </div >
    )
}

export default ProjectSection