import { FC } from "react";

const Menu: FC = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold text-gray-900 w-1/3">
        Make that Menu You eat Unstopable
      </h1>
      <div className="flex justify-end">
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
    </section>
  );
};
export default Menu;
