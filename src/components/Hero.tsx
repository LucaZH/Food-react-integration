import { FC } from "react";
import Button from "./ui/Button";
import SuggestedMenu from "./ui/SuggestedMenu";

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
        <div className="flex mt-10 items-center">
          <img
            src="/img/p1.jpg"
            alt=""
            className="rounded-full w-12 h-12 border-white border-2 object-cover"
          />
          <img
            src="/img/p3.jpg"
            alt=""
            className="rounded-full w-12 h-12 border-white border-2 object-cover -ml-6"
          />
          <img
            src="/img/p2.avif"
            alt=""
            className="rounded-full w-12 h-12 border-white border-2 object-cover -ml-6"
          />
          <div className="ml-4">
            <p className="font-bold text-gray-500">Happy Customers</p>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-yellow-400">
                <path
                  fill="currentColor"
                  d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                ></path>
              </svg>
              <p className="text-xs text-gray-500 ml-1">4,8 (15,6k reviews)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex justify-center">
          <img src="/img/Humberger.png" alt="Humberger" className="w-10/12" />
          <div className="flex items-center  absolute left-10 bottom-20 bg-white px-2 py-1 pr-4 rounded-full shadow-lg gap-4">
            <img
              src="/img/p1.jpg"
              alt="img"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-gray-800 font-semibold">Barry Allen</p>
              <span className="text-gray-500 text-sm font-medium">Courier</span>
            </div>
            <div className="rounded-full w-8 h-8 bg-active/80 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 stroke-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </div>
          <SuggestedMenu title="Spanish Burger" price={9} stars={4} />
        </div>

        <div className=" absolute w-[600px] h-[600px] blur-3xl bg-active/30 rounded-full left-[46%] -z-40"></div>
      </div>
    </section>
  );
};
export default Hero;
