function InstagramCard({ avatarUrl, username, imgUrl }) {
  return (
    <div className=" w-96 m-auto">
      <div className=" px-6 flex items-center gap-[10px] py-2 border-slate-200 border-2">
        <img
          src={avatarUrl}
          alt=""
          className=" aspect-square rounded-full w-12"
        />
        <span className=" font-semibold capitalize text-lg">{username}</span>
      </div>
      <img className=" aspect-square object-cover" src={imgUrl} alt="" />
    </div>
  );
}
export default InstagramCard;

export function InstagramCardList() {
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
    <div className=" flex w-full flex-col gap-6 content-center">
      {cards.map((card, index) => (
        <InstagramCard key={index} {...card} />
      ))}
    </div>
  );
}
