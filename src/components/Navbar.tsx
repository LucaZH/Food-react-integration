import { FC } from "react";
import Navitem from "./ui/Navitem";
import SearchBar from "./ui/SearchBar";
import Button from "./ui/Button";

const NavBar: FC = () => {
  return (
    <section className="flex items-center justify-between fixed w-full">
      <div className="flex flex-col items-center">
        <img
          src="/food-restaurant-svgrepo-com.svg"
          alt="logo"
          className="w-10 h-10 bg-active rounded-full p-2"
        />
        <h1 className="text-xl font-semibold">FOOD</h1>
      </div>
      <div className="flex gap-4">
        <Navitem text="Home" url="/" active={true}></Navitem>
        <Navitem text="About us" url="/" active={false}></Navitem>
        <Navitem text="Our Special" url="/" active={false}></Navitem>
        <Navitem text="Our Offer" url="/" active={false}></Navitem>
      </div>
      <div className="flex items-center gap-6">
        <SearchBar />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-gray-400"
        >
          <path
            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <a href="#" className="text-gray-400">
          Login
        </a>
        <Button text="Sign up"></Button>
      </div>
    </section>
  );
};
export default NavBar;
