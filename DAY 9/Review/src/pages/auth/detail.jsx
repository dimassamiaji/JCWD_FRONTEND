import { axiosInstance } from "../../api/axios";
import NavbarComponent from "../../components/navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const fetchById = () => {
    axiosInstance()
      .get("/products/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (id) fetchById();
    console.log(id);
  }, [id]);
  // useEffect(() => {
  //   console.log(data);
  // }, []);
  return (
    <>
      <NavbarComponent />
      <div className=" flex justify-center p-5">
        <div className=" grid grid-cols-2 max-w-[448px] gap-10">
          <div className=" m-auto">
            <img src={data.img} alt="" />
          </div>
          <div>
            <h1 className="text-3xl">{data.productName}</h1>
            <h2 className=" text-3x1">
              {data?.price?.toLocaleString("id-ID")}
            </h2>
            <div></div>
            <p>
              Info Produk <br />
              Bahan : Kulit <br />
              Merek : Nike <br />
              Penutupan Sepatu : Sepatu Bertali <br />
              Ujung Sepatu : Ujung Tertutup <br />
            </p>
            <div className="grid grid-cols-3 gap-5">
              <button className=" bg-green-400">Buy</button>
              <button className=" bg-gray-400">Qty</button>
              <button className=" bg-red-500">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailPage;
