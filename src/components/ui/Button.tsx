import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button className="rounded-full text-white font-semibold bg-active py-2 px-4 drop-shadow-md hover:bg-transparent hover:text-active hover:border hover:border-active">
      {text}
    </button>
  );
};

export default Button;
