import NavbarComponents from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ name, description, imageUrl }) {
  return (
    <div className="max-w-sm rounded overflow-hidden relative group">
      <Image
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={name}
        width={100}
        height={40}
      />
      <div className="absolute bg-black bg-opacity-75 -translate-y-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-y-0 duration-300 cursor-pointer">
        <div className="px-6 py-4">
          <Link
            href={"/work/travel photos"}
            className="font-bold text-xl mb-2 text-white hover:underline"
          >
            {name}
          </Link>
          <p className="text-white text-base p-1 tracking-tighter">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
