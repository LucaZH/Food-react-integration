import { FC } from "react";

const FoodItem: FC<{ imgUrl: string; name: string; active: boolean }> = ({
  imgUrl,
  name,
  active,
}) => {
  return (
    <div
      className={`flex items-center rounded-full py-2 px-2 gap-5 ${
        active ? "bg-active text-white" : "bg-white text-black"
      }`}
    >
      <img src={imgUrl} alt={name} className="rounded-full w-10 h-10" />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};
export default FoodItem;
