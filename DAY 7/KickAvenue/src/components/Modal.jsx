import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

function ProductModalComponent({ isOpen, onClose, setProducts }) {
  const addNewProduct = () => {
    console.log(data);
    setProducts((prev) => [...prev, data]);
  };
  const [data, setData] = useState({ img: "", price: 0, productName: "" });
  const onChangehandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Product</ModalHeader>
        <ModalBody
          display={"flex"}
          flexDir={"column"}
          gap={"16px"}
          alignItems={"center"}
        >
          <img src={data.img} onChange={onChangehandler} className="img" />
          <Input
            placeholder="product name"
            onChange={onChangehandler}
            name="productName"
          />
          <Input
            placeholder="image url"
            onChange={onChangehandler}
            name="img"
          />
          <Input placeholder="price" />
          <Button
            bgColor={"black"}
            color={"white"}
            mb={"10px"}
            onClick={addNewProduct}
          >
            submit
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default ProductModalComponent;
