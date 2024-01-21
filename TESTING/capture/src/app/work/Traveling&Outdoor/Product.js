import ProductCard from "../Traveling&Outdoor/ProductCard";

const products = [
  {
    name: "Hunting Photo Services",
    description:
      "Hunting Photo Services is a professional service that provides trained and experienced photographers to capture precious moments in your life.",
    imageUrl:
      "https://sociabuzz.s3.ap-southeast-1.amazonaws.com//img/jasa_foto/Jasa-Foto-Hunting-Fotografer-Fotografi-SociaBuzz.jpeg", // Ganti dengan URL gambar yang sesuai
  },
  {
    name: "Outdoor Photo Services",
    description:
      "Outdoor Photo Services is a professional service that provides trained and experienced photographers to capture precious moments in your life.",
    imageUrl:
      "https://sociabuzz.s3.ap-southeast-1.amazonaws.com//img/jasa_foto/Jasa-Foto-Outdoor-Fotografer-Fotografi-SociaBuzz.jpeg", // Ganti dengan URL gambar yang sesuai
  },
  {
    name: "Recreation Photo Services",
    description:
      "Recreation Photo Services is a professional service that provides trained and experienced photographers to capture precious moments in your life.",
    imageUrl:
      "https://sociabuzz.s3.ap-southeast-1.amazonaws.com//img/jasa_foto/Jasa-Foto-di-Tempat-Wisata-Fotografer-Fotografi-SociaBuzz.jpeg", // Ganti dengan URL gambar yang sesuai
  },
  {
    name: "Travel Photo Services",
    description:
      "photography services that are often used by well-known Indonesian artists and celebrities to immortalize their holiday moments",
    imageUrl:
      "https://sociabuzz.s3.ap-southeast-1.amazonaws.com//img/jasa_foto/Jasa-Foto-Liburan-Traveling-Fotografer-Fotografi-SociaBuzz.jpeg", // Ganti dengan URL gambar yang sesuai
  },
];

function Product() {
  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-2xl font-bold mb-6">Traveling & Outdoor</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Product;
