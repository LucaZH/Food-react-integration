import { FC } from "react";

const SearchBar: FC = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="w-full py-2 px-4 rounded-lg bg-black/5 text-black"
      />
      <button className="absolute right-0 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          className="scale-100 stroke-gray-400 "
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
        </svg>
      </button>
    </div>
  );
};
export default SearchBar;
