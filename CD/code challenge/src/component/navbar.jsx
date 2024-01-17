import img from "../assets/Gojek_Logo.png";
import { Link } from "react-router-dom";

function NavbarProfile() {
  return (
    <nav className=" bg-transparent p-5 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img src={img} alt="" className=" w-44" />
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About Us
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Teams
          </a>
          <a href="#" className="text-white">
            EN
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarProfile;
