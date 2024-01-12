function NavbarComponents() {
  return (
    <div className=" flex justify-between p-7 pb-4 border-b-2 border-gray-400">
      {/* logo */}
      <button className=" font-bold text-2xl text-black">Kick Avenue</button>
      {/* <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Type any products here"
      /> */}

      {/* menu */}
      <div className=" flex gap-4 font-semibold">
        <button>Home</button>
        <button>Service</button>
        <button>Contact Us</button>
      </div>

      {/* login & register
      {userSelector?.id ? (
        <button className=" flex gap-3">
          <div>Welcome, {userSelector?.name}</div>
          <div
            className=" px-2 rounded-md border-gray-500 border"
            onClick={logout}
          >
            Logout
          </div>
        </button>
      ) : (
        <div className=" flex gap-3">
          <Link
            className=" px-2 rounded-md border-gray-500 border"
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className=" px-2 rounded-md border-gray-500 border"
            to={"/register"}
          >
            Register
          </Link>
        </div>
      )} */}
    </div>
  );
}
export default NavbarComponents;
