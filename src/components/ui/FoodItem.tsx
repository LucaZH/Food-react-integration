import { FC } from "react";

const FoodItem: FC<{ imgUrl: string; name: string; active: boolean }> = ({
  imgUrl,
  name,
  active,
}) => {
  return (
    <div className={`pr-8 -mr-1 ${active ? "border-r-4 border-r-active" : ""}`}>
      <div
        className={`flex items-center rounded-full py-2 px-2 gap-5 pr-10 ${
          active ? "bg-active text-white" : "bg-white text-black"
        }`}
      >
        <img src={imgUrl} alt={name} className="rounded-full w-10 h-10" />
        <p className="text-lg font-semibold">{name}</p>
      </div>
    </div>
  );
};
export default FoodItem;
