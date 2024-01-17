import NavbarProfile from "../component/navbar";

function AboutUsPage() {
  return (
    <>
      <NavbarProfile />
      <div className="md:pt-[100px] pt-[60px]">
        <div className="w-full h-screen overflow-hidden bg-dark200 relative lg:h-auto">
          <div className=" w-full">
            <img
              src="https://int-website-cms.golabs.io/uploads/07a20af54b341e264544a11bcc2513f8_ad9622e979.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUsPage;
