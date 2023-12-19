function NavbarComponents() {
  return (
    <nav>
      <div className="search">
        <span>
          <img src="./search.png" alt="" />
        </span>
        <input type="text" placeholder="Type any products here" />
      </div>
      <div className="menus">
        <div>Sneakers</div>
        <div>Apparel</div>
        <div>
          <img src="./ka-logo-black.e598ee3d.png" alt="logo" />
        </div>
        <div>Luxury</div>
        <div>Electronics & Collectibles</div>
      </div>
      <div id="logo">
        <img src="./ka-logo-black.e598ee3d.png" alt="logo" width="100%" />
      </div>
      <div className="auth">
        <div>Login</div>
        <div>Register</div>
      </div>
    </nav>
  );
}
export default NavbarComponents;
