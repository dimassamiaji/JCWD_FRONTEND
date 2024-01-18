function AboutPage() {
  return (
    <div className=" relative pt-2 m-auto">
      <img
        src="https://int-website-cms.golabs.io/uploads/07a20af54b341e264544a11bcc2513f8_ad9622e979.webp"
        alt=""
        className=" w-full"
      />
      <div className=" absolute top-0 left-0 py-30 lg:pt-0 lg:flex lg:items-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className=" text-4xl font-bold mb-2">Been quite a ride</h1>
          <div className=" mt-5 md:w-2/3">
            Know our journey, and the people behind it.
          </div>
          <div className=" flex items-center gap-4 lg:gap-5 mt-10 mb-10 lg:mb-30"></div>
        </div>
      </div>

      <div className=" bg-[#101820] pt-20 pb-10">
        <div className=" flex text-center justify-center">
          <div className=" w-full lg:w-full xl:w-7/12 ml-0 ">
            <h2 className=" text-white">Milestones</h2>
          </div>
        </div>
      </div>

      <div className=" bg-white pt-20 pb-10">
        <div className=" flex text-center justify-center">
          <div className=" w-full lg:w-full xl:w-7/12 ml-0 ">
            <h2 className=" text-black ">The three pillars of Gojek</h2>
          </div>
        </div>
      </div>

      <div className=" bg-white grid grid-cols-3">
        <div className=" shadow-sm shadow-green justify-between gap-4 flex flex-col m-4 rounded-3xl min-h-[350px] bg-[#008C16]">
          <div className="ml-1 text-2xl text-white pb-1 font-semibold"></div>
        </div>
        <div className=" shadow-sm shadow-green justify-between gap-4 flex flex-col m-4 rounded-3xl min-h-[350px] bg-[#008C16]">
          <div className="ml-1 text-2xl text-white pb-1 font-semibold">
            gobox
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
