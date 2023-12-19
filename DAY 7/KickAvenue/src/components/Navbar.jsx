import Search from "../assets/search.png";
import Logo from "../assets/Logo.png";

function NavbarComponents() {
  return (
    <nav>
      <div className="search">
        <span>
          <img src={Search} alt="" />
        </span>
        <input type="text" placeholder="Type any products here" />
      </div>
      <div className="menus">
        <div>Sneakers</div>
        <div>Apparel</div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>Luxury</div>
        <div>Electronics & Collectibles</div>
      </div>
      <div id="logo">
        <img src={Logo} alt="logo" width="100%" />
      </div>
      <div className="auth">
        <div>Login</div>
        <div>Register</div>
      </div>
    </nav>
  );
}
export default NavbarComponents;
