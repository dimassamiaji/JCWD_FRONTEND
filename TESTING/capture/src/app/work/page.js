import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Portfolio from "../components/Portofolio";

function Work() {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of my recent work traveling the world."
      />
      <Portfolio />
      <Footer />
    </div>
  );
}
export default Work;
