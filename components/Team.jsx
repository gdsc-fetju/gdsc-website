import React from 'react';
import Image from 'next/image';
import { teamData } from '@/data/data';

function Team() {
  return (
    <section>
      <h1 className="text-center text-4xl">Our Team</h1>
      <div className="sm:mx-24 md:mx-20 lg:mx-28 grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamData &&
          teamData.map((member, i) => (
            <TeamMember key={i} memberData={member} />
          ))}
      </div>
    </section>
  );
}

function TeamMember({ memberData }) {
  const { name, position, picture } = memberData;
  console.log(memberData);

  return (
    <div className="flex flex-col items-center space-y-3 bg-red-10 h-72 w-56 m-9">
      <Image
        src={`/profilePics/${picture}`}
        height={437}
        width={437}
        alt={`${name}'s photo`}
        className="rounded-full w-44 shadow-md"
      />
      <div className="font-bold text-slate-600 text-2xl text-center">
        {memberData.name}
      </div>
      <span className="text-md">{position}</span>
    </div>
  );
}

export default Team;
