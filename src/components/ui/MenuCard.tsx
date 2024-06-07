import { FC } from "react";

const MenuCard: FC<{
  imgUrl: string;
  name: string;
  price: number;
  description: string;
  stars: number;
  reviews: number;
}> = ({ imgUrl, name, price, description, stars, reviews }) => {
  return (
    <div className="shadow-lg relative rounded-xl">
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-56 object-cover rounded-tl-xl rounded-tr-xl"
      />
      <div className="flex flex-col p-4 px-10 space-y-2">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-400 font-medium text-lg">{description}</p>
        <div className="flex justify-between">
          <div className="flex gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  className={`w-4 h-4 ${
                    i < stars ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  <path
                    fill="currentColor"
                    d="M12 2l2.5 6.5h6L15.5 10l2.5 6.5-6-4.5-6 4.5 2.5-6.5-6-4.5h6z"
                  ></path>
                </svg>
              ))}
          </div>
          <p className="text-gray-900 font-medium">({reviews}) Reviews</p>
        </div>
        <div className="flex justify-between">
          <p className="text-2xl font-bold">${price}</p>
          <button className="rounded-lg bg-active text-white py-2 px-10  text-lg font-semibold">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenuCard;
