import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Image from "next/image";
import WeddingImg from "../../public/Wedding1.jpg";

function About() {
  return (
    <div>
      <Hero heading="About Us" message="test" />
      <div className="container mx-auto mt-8 p-4 md:p-8">
        <div className="text-gray-800 leading-relaxed">
          <p className="mb-4">
            Welcome to our company! We are a passionate team dedicated to
            delivering high-quality products and services to our clients.
          </p>
          <p className="mb-4">
            At our core, we believe in innovation, collaboration, and customer
            satisfaction. Our goal is to make a positive impact through
            cutting-edge technologies and exceptional customer service.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
