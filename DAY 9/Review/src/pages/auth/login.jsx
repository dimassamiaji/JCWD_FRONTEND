function LoginPage() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-[448px]">
          <h1 className="text-3xl">Masukan Akun Kamu</h1>
          <p className=" mt-5 text-[#989898] text-[13px]">
            Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus
            langsung jadi deh!
          </p>

          <div className=" font-bold mt-5">Akun</div>
          <input
            type="email"
            className="px-2 bg-[#F3F4F6] rounded-lg min-h-[40px]"
            placeholder="Alamat@mail.com"
            id="email"
          ></input>

          <div className=" font-bold mt-5">Password</div>
          <input
            type="password"
            className=" px-2 bg-[#F3F4F6] rounded-lg min-h-[40px]"
            placeholder="**************"
            id="password"
          ></input>

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
export default LoginPage;
