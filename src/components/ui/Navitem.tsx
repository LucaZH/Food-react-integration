import { FC } from "react";

const Navitem: FC<{ text: string; url: string; active: boolean }> = ({
  text,
  active,
  url,
}) => {
  return (
    <a
      href={url}
      className={`font-medium relative inline-block ${
        active ? "text-active" : "text-gray-500"
      } text-center`}
    >
      {text}
      {active && (
        <svg
          viewBox="0 0 100 2"
          preserveAspectRatio="none"
          className="absolute -bottom-[2px] w-[130%] h-[2px] -left-[15%] bg-current"
        />
      )}
    </a>
  );
};

export default Navitem;
