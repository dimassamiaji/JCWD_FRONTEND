import IgImg1 from "../../public/IgImg1.jpeg";
import IgImg2 from "../../public/IgImg2.jpeg";
import IgImg3 from "../../public/IgImg3.jpeg";
import IgImg4 from "../../public/IgImg4.jpeg";
import IgImg5 from "../../public/IgImg5.jpeg";
import IgImg6 from "../../public/IgImg6.jpeg";
import InstagramImg from "./InstagramImg";

function InstagramPage() {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow us on Instagram</p>
      <p className="pb-4">@Capshut.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
      </div>
    </div>
  );
}

export default InstagramPage;
