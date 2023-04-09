import Image from "next/image";

function TestimonialCard() {
  return (
    <section className="flex flex-col justify-center md:flex-row items-center py-10 mx-10 md:mx-56  md:border-google-blue md:border-2 md:p-5 my-10 rounded-xl">
      {/* Left Section */}
      <div>
        <Image
          src="/hello.png"
          width={200}
          height={200}
          className="rounded-full"
        ></Image>
      </div>
      {/* Right Section */}
      <div className="flex flex-col md:items-start items-center">
        <span className="text-2xl">Nikita Gandhi</span>
        <div className="m-3 flex gap-4">
          <div>
            <span className="my-1 text-[#4E8E70] px-3 py-1 bg-[#C3EAD7] rounded-md font-mulish">
              Designer
            </span>
          </div>
          <div>
            <span className="my-1 text-[#62989C] px-3 py-1 bg-[#C3E7EA] rounded-md font-mulish">
              Developer
            </span>
          </div>
        </div>
        <p className="px-5 text-justify max-w-xl">
          "It is professional, considers everyone's time, can think about the
          whole problem and not only in a small niche, friendly, and UI, UX.
        </p>
      </div>
    </section>
  );
}

export default TestimonialCard;
