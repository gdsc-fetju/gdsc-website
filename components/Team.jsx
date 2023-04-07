import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    <div className='mx-auto px-10 py-4 md:flex items-center justify-around'>
      <div className='hidden md:block'>
        <Image src='/team.png' alt='team' width={500} height={500} />
      </div>
      <div className='left text-center md:text-justify md:w-1/2'>
        <h1 className='text-3xl font-medium'>Team</h1>
        <p className='text-lg my-3 '>A Team is as efficient as the members of its team are. This is a rundown of how explicable each individual is and how they supplement the team.</p>
        <Link href='/Team'>
          <button className='bg-[#4285f4] text-white py-3 px-8'>See More</button>
        </Link>
      </div>

    </div>
  )
}

export default Team;