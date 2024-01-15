import NavbarProfile from "../component/navbar";
import NavbarComponents from "../component/navbar";
import img from "../assets/imgcity2.jpg";

function HomePage() {
  return (
    <>
      <NavbarProfile />
      <div className="">
        <div className="w-full h-screen overflow-hidden bg-dark200 relative lg:h-auto lg:aspect-video">
          <img src={img} alt="" className=" w-full" />
          <div className="absolute h-full w-full top-0 left-0 py-30 lg:pt-0 lg:flex lg:items-center">
            <div className="w-full h-full container mx-auto flex flex-col justify-center text-white text-left text-wrap">
              <h1 className=" text-4xl font-bold mb-2">
                3 countries. 20+ products. 1 leading on-demand platform.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#101820] pt-10 pb-10">
        <div className=" text-center justify-center">
          <div className=" w-full lg:w-full xl:w-7/12 ml-0 ">
            <h2 className=" text-white px-2 py-4">
              We build products that nations runs on
            </h2>
            <span className=" hover:bg-slate-400 font-sans text-xs font-medium leading-6 rounded-full px-4 py-2 h- justify-center items-center text-center w-fit bg-green-500 text-white">
              View all products
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#101820]">
        <div className="grid grid-cols-4 gap-2 p-20">
          <div className=" m-4 rounded-3xl min-h-[450px] bg-[#008C16]">
            <div className=" p-8 h-[250px] rounded-3xl flex flex-col bg-[#05AA12]"></div>
          </div>
          <div className=" m-4 rounded-3xl min-h-[450px] bg-[#0093B2]">
            <div className=" p-8 h-[250px] rounded-3xl flex flex-col bg-[#05AED6]"></div>
          </div>
          <div className=" m-4 rounded-3xl min-h-[450px] bg-[#AF282F]">
            <div className=" p-8 h-[250px] rounded-3xl flex flex-col bg-[#EE2737]"></div>
          </div>
          <div className=" m-4 rounded-3xl min-h-[450px] bg-[#80266C]">
            <div className=" p-8 h-[250px] rounded-3xl flex flex-col bg-[#93328E]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
