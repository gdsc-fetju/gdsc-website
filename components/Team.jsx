
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    <div className='mx-auto px-10 py-4'>
  <h1 className='text-5xl text-red-600 font-bold text-center mb-5'>Meet Our Team</h1>
  <div className='md:flex items-center justify-around'>
    <div className='hidden md:block'>
      <Image src='/team.png' alt='team' width={500} height={500} />
    </div>
    <div className='left text-center md:text-left md:w-1/2 md:ml-10'>
      <p className='text-lg mb-8 text-base sm:text-lg md:text-xl lg:text-2xl text-justify'>
        In our community, teamwork is essential for success. Working together allows us to pool our skills, knowledge, and resources to achieve common goals. When individuals come together to form a team, they can accomplish far more than they could alone. That is why we at
        <span className="text-blue-500 text-base sm:text-lg md:text-xl lg:text-2xl"> Google </span>
        <span className="text-green-500 text-base sm:text-lg md:text-xl lg:text-2xl"> Developer </span>
        <span className="text-red-500 text-base sm:text-lg md:text-xl lg:text-2xl"> Student </span>
        <span className="text-yellow-500 text-base sm:text-lg md:text-xl lg:text-2xl"> Clubs </span> FET- Jain University we are the best in the college.
      </p>
      <Link href='/Team'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg border border-black shadow-md'>See More</button>
      </Link>
    </div>
  </div>
</div>

  )
}

export default Team;