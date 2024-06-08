import { FC } from "react";

const FoodCard: FC<{
  foodName: string;
  price: number;
  link: string;
  imgUrl: string;
}> = ({ foodName, price, link, imgUrl }) => {
  return (
    <div className="relative w-60 h-60">
      <img src={imgUrl} alt={foodName} className="absolute" />
      <div className="relative w-full h-full bottom-0">
        <h4 className="text-2xl">{foodName}</h4>
        <p className="text-lg">${price}</p>
        <a href={link}>Click Now</a>
      </div>
    </div>
  );
};
export default FoodCard;
