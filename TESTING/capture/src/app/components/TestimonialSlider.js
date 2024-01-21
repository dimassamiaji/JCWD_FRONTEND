import Teams from "../components/Teams";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Image from "next/image";
import TestiImg1 from "../../public/Testi1.jpg";
import TestiImg2 from "../../public/Testi2.jpg";
import TestiImg3 from "../../public/Testi3.jpg";
import { FaInstagram } from "react-icons/fa";

function TestimonialSlider() {
  return (
    <div className="max-w-[1240px] mx-auto mt-12">
      <p className="text-2xl font-bold text-center text-black p-5">
        Tagged from our client's Instagram feeds
      </p>
      <div className=" container mx-auto py-5 px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="shadow-lg rounded-lg relative overflow-hidden group">
            <Image className="rounded-lg" src={TestiImg1} alt="" />
            <div className="absolute bg-black bg-opacity-75 -translate-y-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-y-0 duration-300 ">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Millen Cyrus
                </h3>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/millencyrus/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-500 duration-300"
                    >
                      <FaInstagram className="inline-block text-2xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-lg relative overflow-hidden group">
            <Image className="rounded-lg" src={TestiImg2} alt="" />
            <div className="absolute bg-black bg-opacity-75 -translate-y-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-y-0 duration-300">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-2">Titi Dj</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/titidj/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-500 duration-300"
                    >
                      <FaInstagram className="inline-block text-2xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-lg relative overflow-hidden group">
            <Image className="rounded-lg" src={TestiImg3} alt="" />
            <div className="absolute bg-black bg-opacity-75 -translate-y-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-y-0 duration-300 ">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Nikita Willy
                </h3>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/nikitawillyofficial94/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-500 duration-300"
                    >
                      <FaInstagram className="inline-block text-2xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestimonialSlider;
