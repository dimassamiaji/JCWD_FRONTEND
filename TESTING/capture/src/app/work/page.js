import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Portfolio from "../components/Portofolio";

function Work() {
  return (
    <div>
      <Hero
        heading="Our Capture"
        message="This is some of our recent work traveling the world."
      />
      <Portfolio />
      <Footer />
    </div>
  );
}
export default Work;
