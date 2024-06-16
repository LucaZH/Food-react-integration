import { FC } from "react";
import TestmonialCard from "./ui/TestmonialCard";

const Testmonial: FC = () => {
  const Testmanialitems = [
    {
      author: "John",
      authorImg: "/img/p1.jpg",
      job: "String",
      stars: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum modi ipsa iure facere atque blanditiis architecto eos sint",
    },
    {
      author: "Angela",
      authorImg: "/img/p2.avif",
      job: "String",
      stars: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum modi ipsa iure facere atque blanditiis architecto eos sint",
    },
    {
      author: "Ben",
      authorImg: "/img/p3.jpg",
      job: "String",
      stars: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum modi ipsa iure facere atque blanditiis architecto eos sint",
    },
  ];
  return (
    <section className="space-y-16 px-16 my-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Food lover feedback
        </h1>
        <p className="text-gray-400">See what pepole say about our services</p>
      </div>
      <div className="flex gap-10">
        {Testmanialitems.map((item) => (
          <TestmonialCard
            author={item.author}
            authorImg={item.authorImg}
            content={item.content}
            job={item.job}
            stars={item.stars}
          />
        ))}
      </div>
    </section>
  );
};
export default Testmonial;
