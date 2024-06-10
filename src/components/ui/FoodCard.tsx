import { FC } from "react";

const FoodCard: FC<{
  foodName: string;
  price: number;
  link: string;
  imgUrl: string;
}> = ({ foodName, price, link, imgUrl }) => {
  return (
    <div className="relative">
      <img src={imgUrl} alt={foodName} className="rounded-3xl min-w-96 h-96" />
      <div className="absolute bottom-0 pl-8 pb-6 text-white font-black">
        <h4 className="text-3xl">{foodName}</h4>
        <p className="text-3xl">${price}</p>
        <a href={link}>Click Now </a>
      </div>
    </div>
  );
};
export default FoodCard;
