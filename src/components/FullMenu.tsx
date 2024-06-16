import { FC } from "react";
import MenuCard from "./ui/MenuCard";

const FullMenu: FC = () => {
  const Menu = [
    {
      imgUrl: "/img/plat.jpg",
      name: "Pizza",
      price: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi error eveniet ut magnam saepe vel ipsum ratione!",
      stars: 4,
      reviews: 800,
    },
    {
      imgUrl: "/img/plat.jpg",
      name: "Pizza",
      price: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi error eveniet ut magnam saepe vel ipsum ratione!",
      stars: 4,
      reviews: 800,
    },
    {
      imgUrl: "/img/plat.jpg",
      name: "Pizza",
      price: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi error eveniet ut magnam saepe vel ipsum ratione!",
      stars: 4,
      reviews: 800,
    },
    {
      imgUrl: "/img/plat.jpg",
      name: "Pizza",
      price: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi error eveniet ut magnam saepe vel ipsum ratione!",
      stars: 4,
      reviews: 800,
    },
    {
      imgUrl: "/img/plat.jpg",
      name: "Pizza",
      price: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi error eveniet ut magnam saepe vel ipsum ratione!",
      stars: 4,
      reviews: 800,
    },
    {
      imgUrl: "/img/plat.jpg",
      name: "Pizza",
      price: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi error eveniet ut magnam saepe vel ipsum ratione!",
      stars: 4,
      reviews: 800,
    },
  ];
  return (
    <section className="mx-16 mb-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">Full Menu</h1>
        <p className="text-gray-400">
          From classic favorite to innovative new dishies, our menu <br />
          has something for everyone.
        </p>
      </div>
      <div className="flex gap-10 w-full justify-center my-10">
        <p className="font-bold text-xl">Breakfast</p>
        <p className="font-bold text-xl">Launch</p>
        <p className="font-bold text-xl">Dinner</p>
      </div>
      <div className="grid grid-cols-3 gap-20">
        {Menu.map((item) => (
          <MenuCard
            description={item.description}
            imgUrl={item.imgUrl}
            name={item.name}
            price={item.price}
            reviews={item.reviews}
            stars={item.stars}
          />
        ))}
      </div>
    </section>
  );
};
export default FullMenu;
