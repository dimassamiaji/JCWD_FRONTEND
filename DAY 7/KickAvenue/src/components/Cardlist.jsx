import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import ProductModalComponent from "./Modal";

function CardListComponents({ products, setProducts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="content">
        {products.map((product, key) => (
          <CardComponent key={key} {...product} />
        ))}
        <Flex
          pos={"fixed"}
          bottom={0}
          w={"100%"}
          maxW={"984px"}
          justifyContent={"right"}
          padding={"30px"}
        >
          <Button
            borderRadius={"100%"}
            p={"10px"}
            zIndex={1}
            bgColor={"black"}
            color={"white"}
            onClick={onOpen}
          >
            Add
          </Button>
        </Flex>
        <ProductModalComponent
          isOpen={isOpen}
          onClose={onClose}
          setProducts={setProducts}
        />
      </div>
    </>
  );
}
export default CardListComponents;

function CardComponent({ img, productName, price }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="wrapper">
        <h2>{productName}</h2>
        <span> IDR {Number(price).toLocaleString("id-ID")}</span>
      </div>
    </div>
  );
}
