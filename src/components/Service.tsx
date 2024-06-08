import { FC } from "react";
import ServiceItem from "./ui/ServiceItem";

const Service: FC = () => {
  const services = [
    {
      title: "Ease to use",
      desc: "lorem ipsum",
      imgUrl: "/vite.svg",
    },
    {
      title: "Fast delivery",
      desc: "lorem ipsum",
      imgUrl: "/vite.svg",
    },
    {
      title: "Ease to use",
      desc: "lorem ipsum",
      imgUrl: "/vite.svg",
    },
  ];
  return (
    <section className="text-center flex flex-col space-y-16 my-24">
      <h1 className="text-5xl font-bold text-gray-900">Why choose us?</h1>
      <div className="flex justify-around">
        {services.map((item, index) => (
          <ServiceItem
            title={item.title}
            desc={item.desc}
            imgUrl={item.imgUrl}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
export default Service;
