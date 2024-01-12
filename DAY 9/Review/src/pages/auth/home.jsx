import NavbarComponent from "../../components/navbar";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../api/axios";
import CardListComponents from "../../components/cardlist";
import CardComponent from "../../components/cardlist";

function HomePage() {
  const [products, setProducts] = useState([]);
  const fetch = () => {
    axiosInstance()
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="md:px-20 w-full">
        <div className=" grid grid-cols-1 lg:items-center md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
          {products.map((product, key) => (
            <CardComponent {...product} key={key} />
          ))}
        </div>
      </div>
    </>
  );
}
export default HomePage;
