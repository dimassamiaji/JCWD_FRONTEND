import { useState } from "react";
import { products } from "../database/data.json";
import CardListComponents from "../components/Cardlist";

function HomePage() {
  const [data, setdata] = useState([...products]);
  return (
    <>
      <CardListComponents products={data} setProducts={setdata} />
    </>
  );
}
export default HomePage;
