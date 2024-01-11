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
      <div className=" grid grid-cols-4">
        {products.map((product, key) => (
          <CardComponent {...product} key={key} />
        ))}
      </div>
    </>
  );
}
export default HomePage;
