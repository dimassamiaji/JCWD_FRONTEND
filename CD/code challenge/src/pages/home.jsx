import NavbarProfile from "../component/navbar";
import NavbarComponents from "../component/navbar";
import img from "../assets/imgcity2.jpg";
import img2 from "../assets/Logo_White.png";
import img3 from "../assets/goride_1.png";

function HomePage() {
  return (
    <>
      <NavbarProfile />
      {/* banner*/}
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

      {/* Explore Carrers*/}
      <div className=" bg-[#101820] pt-10 pb-10">
        <div className=" text-center justify-center">
          <div className=" w-full lg:w-full ml-0 ">
            <h2 className=" text-white px-2 py-4 font-semibold text-2xl">
              We’re Gojek, the drivers of change
            </h2>
            <span className=" hover:bg-slate-400 font-sans text-xs font-medium leading-6 rounded-full px-4 py-2 justify-center items-center text-center w-fit bg-green-500 text-white">
              Explore Carrers
            </span>
          </div>
        </div>
      </div>

      <div className=" bg-[#101820]">
        {/* <div className="relative hidden lg:block">
          <div className="absolute bg-white rounded-t-[40px]"></div>

          <div className="container grid grid-cols-1 sm:grid-cols-4 text-center relative z-20">
            <div className="flex flex-col items-center p-5">
              <img src="img2" alt="" className="w-20" />
            </div>
            <div className="flex flex-col items-center p-5">
              <img src="img2" alt="" className="w-50" />
            </div>
            <div className="flex flex-col items-center p-5">
              <img src="img2" alt="" className="w-50" />
            </div>
            <div className="flex flex-col items-center p-5">
              <img src="img2" alt="" className="w-50" />
            </div>
          </div>
        </div> */}
      </div>

      {/* Products*/}
      <div className=" bg-[#101820] pt-10 pb-10">
        <div className=" text-center justify-center">
          <div className=" w-full lg:w-full ml-0 ">
            <h2 className=" text-white px-2 py-4 font-semibold text-2xl">
              We build products that nations runs on
            </h2>
            <span className=" hover:bg-slate-400 font-sans text-xs font-medium leading-6 rounded-full px-4 py-2 justify-center items-center text-center w-fit bg-green-500 text-white">
              View all products
            </span>
          </div>
        </div>
      </div>

      {/* Products*/}
      <div className="bg-[#101820] pt-5">
        <div className=" text-center pb-8 px-4 lg:px-0 pt-15 lg:pt-20 grid grid-cols-5">
          {/* Products green*/}
          <div className=" m-4 rounded-3xl min-h-[350px] bg-[#008C16]">
            <div className=" p-5 h-[250px] rounded-3xl flex flex-col bg-[#05AA12]">
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gobox
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  goride
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className=" text-2xl text-white pb-1 px-1 font-semibold">
                  gobluebird
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gosend
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gocar
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-b-r40 p-4 h-[150px]">
              <h3 className="font-sans filter brightness-110 text-white text-2xl font-bold">
                Transport & Logistics
              </h3>
              <p className="font-sans filter brightness-200 text-white md:text-xs font-light tracking-normal md:leading-5">
                We’ve kinda done 13,000 trips between the earth and the moon.
              </p>
            </div>
          </div>

          {/* Products blue*/}
          <div className=" m-4 rounded-3xl min-h-[350px] bg-[#0093B2]">
            <div className=" p-5 h-[250px] rounded-3xl flex flex-col bg-[#05AED6]">
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gopay
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gosure
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className=" text-2xl text-white pb-1 px-1 font-semibold">
                  gopaylater
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gotagihan
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-b-r40 p-4 h-[150px]">
              <h3 className="font-sans filter brightness-110 text-white text-2xl font-bold">
                Payments
              </h3>
              <p className="font-sans filter brightness-200 text-white md:text-xs font-light tracking-normal md:leading-5">
                From deals to donations, we make transactions easy, reliable,
                and cashless.
              </p>
            </div>
          </div>

          {/* Products red*/}
          <div className=" m-4 rounded-3xl min-h-[350px] bg-[#AF282F]">
            <div className=" p-5 h-[250px] rounded-3xl flex flex-col bg-[#EE2737]">
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gomed
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  goshop
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className=" text-2xl text-white pb-1 px-1 font-semibold">
                  gofood
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gomart
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-b-r40 p-4 h-[150px]">
              <h3 className="font-sans filter brightness-110 text-white text-2xl font-bold">
                Food & Shopping
              </h3>
              <p className="font-sans filter brightness-200 text-white md:text-xs font-light tracking-normal md:leading-5">
                Fill your cart with food, electronics, medicines, and more.
                Without stepping out!
              </p>
            </div>
          </div>

          {/* Products grape*/}
          <div className=" m-4 rounded-3xl min-h-[350px] bg-[#80266C]">
            <div className=" p-5 h-[250px] rounded-3xl flex flex-col bg-[#93328E]">
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-sans">
                  midtrans
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gostore
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className=" text-2xl text-white pb-1 px-1 font-semibold">
                  moka
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gobiz
                </div>
              </div>
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  selly
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-b-r40 p-4 h-[150px]">
              <h3 className="font-sans filter brightness-110 text-white text-2xl font-bold">
                Business
              </h3>
              <p className="font-sans filter brightness-200 text-white md:text-xs font-light tracking-normal md:leading-5">
                Manage your restaurants, run ads, create promos, and do more.
              </p>
            </div>
          </div>

          {/* Products pink*/}
          <div className=" m-4 rounded-3xl min-h-[350px] bg-[#AA0061]">
            <div className=" p-5 h-[250px] rounded-3xl flex flex-col bg-[#DF1A95]">
              <div className="flex items-center text-center">
                <div className="">
                  <img src={img2} alt="" className="h-10" />
                </div>
                <div className="ml-1 text-2xl text-white pb-1 font-semibold">
                  gotix
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-b-r40 p-4 h-[150px]">
              <h3 className="font-sans filter brightness-110 text-white text-2xl font-bold">
                Entertainment
              </h3>
              <p className="font-sans filter brightness-200 text-white md:text-xs font-light tracking-normal md:leading-5">
                Binge-watch your favorite series, book tickets, play games, have
                a good time!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center bg-[#101820]">
        <span className=" hover:bg-slate-400 font-sans text-xs font-medium leading-6 rounded-full px-4 py-2 justify-center items-center text-center w-fit bg-green-500 text-white">
          View all products
        </span>
      </div>
    </>
  );
}
export default HomePage;
