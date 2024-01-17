import NavbarComponent from "../component/navbar";

function HomePage() {
  return (
    <>
      <NavbarComponent />
      <div className=" bg-slate-500">
        <Navbar />
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Selamat datang di Gojek!
          </h1>
          <p className="text-center text-gray-600 mt-4">
            Temukan berbagai macam layanan yang dapat membantu kebutuhan
            harianmu.
          </p>
          <div className="flex justify-center mt-12 space-x-4">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Mulai Menggunakan Gojek
            </a>
            <a
              href="#"
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded border border-gray-300"
            >
              Cara Kerja Gojek
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;


