import { Avatar, Box, Center, Flex } from "@chakra-ui/react";

function Card({ avatarUrl, username, imgUrl }) {
  return (
    <Box w={"384px"} m={"auto"}>
      <Flex
        px={"24px"}
        justifyItems={"center"}
        gap={"10px"}
        py={"8px"}
        border={"2px solid rgb(226 232 240)"}
      >
        <Avatar src={avatarUrl} alt="" w={"48px"} />
        <Center
          fontWeight={"600"}
          textTransform={"capitalize"}
          fontSize={"18px"}
        >
          {username}
        </Center>
      </Flex>
      <img src={imgUrl} alt="" style={{ aspectRatio: 1, objectFit: "cover" }} />
    </Box>
  );
}
export default Card;

export function Cardlist() {
  const cards = [
    {
      imgUrl:
        "https://assets.kompasiana.com/items/album/2022/11/08/black-cat-open-mouth-wallpaper-2560x1600-7-636a861a4addee2b7f5e51e2.jpg?t=o&v=740&x=416",
      avatarUrl:
        "https://get.wallhere.com/photo/Black-Cat-Animal-Collective-1623609.jpg",
      username: "Kucing Item",
    },
    {
      imgUrl:
        "https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2019/08/animal-animal-photography-cat-57416.jpg",
      avatarUrl:
        "https://asset.kompas.com/crops/50cNU_mHPAZthHtamSwIQPo5yhc=/99x0:911x541/750x500/data/photo/2023/11/14/655373d60705e.png",
      username: "Kucing Oren",
    },
    {
      imgUrl:
        "https://p4.wallpaperbetter.com/wallpaper/336/545/228/white-cat-photo-white-wallpaper-preview.jpg",
      avatarUrl:
        "https://e0.pxfuel.com/wallpapers/88/619/desktop-wallpaper-white-of-cat-face.jpg",
      username: "Kucing Putih",
    },
  ];
  return (
    <Center w="full" flexDir={"column"} gap={"24px"}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Center>
  );
}
