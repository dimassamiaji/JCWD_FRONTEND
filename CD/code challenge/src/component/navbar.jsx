function NavbarComponent() {
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
    </div>
  );
}
export default NavbarComponent;
