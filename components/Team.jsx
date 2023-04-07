
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    <div className='mx-auto px-10 py-4 md:flex items-center justify-around'>
      <div className='hidden md:block'>
        <Image src='/team.png' alt='team' width={500} height={500} />
      </div>
     <div className='left text-center md:text-left md:w-1/2 md:ml-10'>
        <h1 className='text-3xl font-bold mb-5'>Meet Our Team</h1>
       
        <p className='text-lg mb-8'>A team is as efficient as the members of its team are. This is a rundown of how capable each individual is and how they complement the team.</p>
        <Link href='/Team'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md'>See More</button>
        </Link>
      </div>

    </div>
  )
}

export default Team;