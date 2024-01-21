import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Image from "next/image";
import WeddingImg from "../../public/Wedding1.jpg";
import Teams from "../components/Teams";
import TeamImg1 from "../../public/Team1.jpeg";
import TeamImg2 from "../../public/Team2.jpg";
import TeamImg3 from "../../public/Team3.jpg";
import { FaInstagram } from "react-icons/fa";

function About() {
  return (
    <div>
      <Hero heading="About Us" message="We’re Picture Perfect Photography." />
      <div className="container mx-auto mt-8 p-4 md:p-8 text-center ">
        <div className="text-gray-800 leading-relaxed">
          <p className="mb-4">
            We are a creative photography studio that provides you with more
            than just an image. Our mission is to bring your vision to life,
            working closely with companies and individuals to produce creative
            specialist images.
          </p>
          <p className="mb-4">
            Tailoring our services to your business needs, actively encouraging
            clients to find their photoshoot goals through planning, and our
            creative strategy sessions to help create a powerful visual
            narrative using creative and bold photography and editing techniques
            to make you or your business shine.
            <strong></strong>
          </p>
        </div>
      </div>
      <p className="text-3xl text-center">Our Founder</p>
      <div className="mx-auto py-20 px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="shadow-lg rounded-lg relative overflow-hidden group">
            <Image className="rounded-lg" src={TeamImg1} alt="" />
            <div className="absolute bg-black bg-opacity-75 -translate-x-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300 ">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Italo Melo
                </h3>
                <h4 className="text-white text-lg font-normal mb-2">
                  Photographer
                </h4>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/simonrobben/"
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
            <Image className="rounded-lg" src={TeamImg2} alt="" />
            <div className="absolute bg-black bg-opacity-75 -translate-x-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300 ">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Spencer Selover
                </h3>
                <h4 className="text-white text-lg font-normal mb-2">
                  Graphics Design
                </h4>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/spencerselover/"
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
            <Image className="rounded-lg" src={TeamImg3} alt="" />
            <div className="absolute bg-black bg-opacity-75 -translate-x-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300 ">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Nitin Khajotia
                </h3>
                <h4 className="text-white text-lg font-normal mb-2">
                  Web Development
                </h4>
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/nitinkhajotia/"
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
      <Footer />
    </div>
  );
}
export default About;
