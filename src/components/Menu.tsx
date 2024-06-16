import { FC } from "react";
import FoodCard from "./ui/FoodCard";
import FoodItem from "./ui/FoodItem";

const Menu: FC = () => {
  return (
    <section className="px-12">
      <h1 className="text-4xl font-bold text-gray-900 w-1/3">
        Make that Menu You eat Unstopable
      </h1>
      <div className="flex justify-end gap-4">
        <div className="rounded-full p-1 bg-gray-200">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
          >
            <path
              d="M9.5 7L14.5 12L9.5 17"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="rounded-full p-1 bg-gray-200">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
          >
            <path
              d="M9.5 7L14.5 12L9.5 17"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex ">
        <div className="border-r-4 flex flex-col content-center justify-between py-6 basis-1/6">
          <FoodItem active={false} imgUrl="/img/plat.jpg" name="Pizza" />
          <FoodItem active={false} imgUrl="/img/plat.jpg" name="Pizza" />
          <FoodItem active={true} imgUrl="/img/plat.jpg" name="Pizza" />
          <FoodItem active={false} imgUrl="/img/plat.jpg" name="Pizza" />
          <FoodItem active={false} imgUrl="/img/plat.jpg" name="Pizza" />
        </div>
        <div className="flex basis-10/12 m-10 mr-0 justify-between gap-8 w-full overflow-hidden overflow-x-scroll">
          <FoodCard
            foodName="Spanish Pizza"
            imgUrl="/img/plat.jpg"
            link="#"
            price={10}
          />
          <FoodCard
            foodName="Spanish Pizza"
            imgUrl="/img/plat.jpg"
            link="#"
            price={10}
          />
          <FoodCard
            foodName="Spanish Pizza"
            imgUrl="/img/plat.jpg"
            link="#"
            price={10}
          />
        </div>
      </div>
    </section>
  );
};
export default Menu;
