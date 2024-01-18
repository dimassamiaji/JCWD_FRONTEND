import Logo from "../assets/Cimory.png";
import { Link } from "react-router-dom";

function NavbarProfile() {
  return (
    <nav className=" flex bg-[#1D58B2] p-5 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img src={Logo} alt="" className=" w-44" />
        </div>

        <div className="flex items-center space-x-4 text-white">
          <Link to={"/Home"}>Home</Link>
          <Link to={"/About"}>About Us</Link>
          <Link to={"/Services"}>Services</Link>
          <Link to={"/Teams"}>Teams</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarProfile;
