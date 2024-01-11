import { Link } from "react-router-dom";
function CardComponent({ img, productName, price, id }) {
  return (
    <>
      <div className=" flex flex-col items-center gap-5 w-full">
        <img
          src={img}
          alt=""
          className=" max-h-[200px] max-w-[200px] object-contain"
        />
        <div className=" px-5 flex flex-col gap-2 items-center w-full">
          <Link to={"/product/" + id}>{productName} </Link>
          <span className=" text-base font-semibold"> IDR {price} </span>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
