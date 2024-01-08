import { document } from "postcss";
import { useState } from "react";

function RegisterPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const key = e.target.id;
    const { value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  // const mendaftar = () => {
  //   const name = document.getElementById{"name"}.value;
  //   const email = document.getElementById{"email"}.value;
  //   const password = document.getElementById{"password"}.value;
  // };

  // console.log(name, email, password);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-[448px]">
          <h1 className="text-3xl">Bikin Akun Baru</h1>
          <p className=" mt-5 text-[#989898] text-[13px]">
            Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus
            langsung jadi deh!
          </p>

          <div className=" font-bold mt-5">Name Lengkap</div>
          <input
            className=" px-2 bg-[#F3F4F6] rounded-lg min-h-[40px]"
            placeholder="Dimskuy"
            onChange={inputHandler}
            id="name"
          ></input>

          <div className=" font-bold mt-5">Email</div>
          <input
            type="email"
            className="px-2 bg-[#F3F4F6] rounded-lg min-h-[40px]"
            placeholder="Alamat@mail.com"
            onChange={inputHandler}
            id="email"
          ></input>

          <div className=" font-bold mt-5">Password</div>
          <input
            type="password"
            className=" px-2 bg-[#F3F4F6] rounded-lg min-h-[40px]"
            placeholder="**************"
            onChange={inputHandler}
            id="password"
          ></input>

          <p className=" mt-5 text-[#989898] text-[13px]">
            Dengan mendaftar berarti kamu setuju dengan Terms of Service dan
            Privacy Policy dari Namanyajugabelajar.io!
          </p>
          <button
            className=" rounded-lg mt-5 text-white bg-[#4F46E5] h-16"
            // onClick={mendaftar}
          >
            Mendaftar
          </button>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;
