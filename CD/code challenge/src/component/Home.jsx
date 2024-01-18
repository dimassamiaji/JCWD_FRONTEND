import NavbarProfile from "./navbar";
import NavbarComponents from "./navbar";
import Banner from "../assets/Banner.jpg";
import img2 from "../assets/Logo_White.png";
import img3 from "../assets/goride_1.png";

function HomePage() {
  return (
    <>
      <div className="">
        <div className="w-full overflow-hidden bg-dark200 relative lg:h-auto lg:aspect-video">
          <img src={Banner} alt="" className=" w-full" />
          <div className="absolute w-full top-0 left-0 py-30 lg:pt-0 lg:flex lg:items-center"></div>
        </div>
      </div>

      <div className=" container mx-auto max-w-2xl pt-5">
        <div className=" grid grid-cols-2 ">
          <h1 className=" m-2">
            <strong>Berita</strong>
          </h1>
          <div className=" grid grid-cols-2">
            <h1 className=" m-2">
              <strong className=" text-end">Lihat semua</strong>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
