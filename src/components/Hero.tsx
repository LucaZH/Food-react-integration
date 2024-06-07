import { FC } from "react";
import Button from "./ui/Button";

const Hero: FC = () => {
  return (
    <section className="flex  h-screen items-center justify-between w-full px-12">
      <div className="basis-2/3">
        <h3 className="text-6xl font-black">Food You Love</h3>
        <h3 className="text-6xl font-black text-active">Delivered To You</h3>
        <p className="text-gray-500 my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi
          amet rerum, laudantium quae enim cupiditate necessitatibus.
        </p>
        <div className="flex gap-8 items-center">
          <Button text="Get Started"></Button>
          <div className="flex gap-2 items-center">
            <div className="rounded-full shadow-lg shadow-active/15 p-3">
              <svg
                viewBox="-3 0 28 28"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Icon-Set-Filled"
                    transform="translate(-419.000000, -571.000000)"
                    fill="#FF5331"
                  >
                    <path
                      d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
                      id="play"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <a href="#">Watch Video</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/public/img/Humberger.png"
          alt="Humberger"
          className="w-10/12"
        />
        <div className=" absolute w-[600px] h-[600px] blur-3xl bg-active/30 rounded-full left-[46%] -z-40"></div>
      </div>
    </section>
  );
};
export default Hero;
