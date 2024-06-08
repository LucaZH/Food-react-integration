import { FC } from "react";

const ServiceItem: FC<{ imgUrl: string; title: string; desc: string }> = ({
  imgUrl,
  title,
  desc,
}) => {
  return (
    <div className="items-center">
      <img src={imgUrl} alt={title} className="w-40 h40" />
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-400 font-medium">{desc}</p>
    </div>
  );
};
export default ServiceItem;
