import Image from "next/image";

function TestimonialCard() {
  return (
    <section className="flex flex-col justify-center md:flex-row items-center py-10 mx-10 md:mx-56  md:border-google-blue md:border-2 md:p-5 my-10 rounded-xl">
      {/* Left Section */}
      <div>
        <Image
          src="/testimonialImages/tushar.jpg"
          width={200}
          height={200}
          alt="helloAlt"
          className="rounded-full"
        ></Image>
      </div>
      {/* Right Section */}
      <div className="flex flex-col md:items-start items-center">
        <span className="text-2xl font-semibold">Tushar Vilekar</span>
        <div className="m-3 flex gap-4">
          <div>
            <span className="my-1 text-[#4E8E70] px-3 py-1 bg-[#C3EAD7] rounded-md font-mulish">
              GDSC Lead LPU
            </span>
          </div>
          <div>
            <span className="my-1 text-[#62989C] px-3 py-1 bg-[#C3E7EA] rounded-md font-mulish">
              Developer
            </span>
          </div>
        </div>
        <p className="px-5 text-justify max-w-xl">
          &quot;The outreach efforts of GDSC FET JU have been exceptional, with the club&apos;s activities having a tangible impact on the wider community. The 2022-23 session saw a lot of active and successful collaborations with GDSC FET JU in terms of Organizers CompeteNCompose (An online hackathon on a national level) and National Organizers of GDSC WoW (Wonder of Wonders). The club has taken an active role in organizing events, workshops, and seminars, and I am confident that the club&apos;s efforts will continue to bear fruit in the years to come.
          &quot;
        </p>
      </div>
    </section>
  );
}

export default TestimonialCard;
