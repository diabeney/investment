import { Button } from "@/shared/components/ui/button";
const news = [
  {
    id: "1",
    title: "Investment Firm Achieves Record Growth in Q3",
    description:
      "Our firm reported record-breaking growth in the third quarter, with a 20% increase in assets under management. This milestone highlights our continued commitment to delivering value to our clients.",
  },
  {
    id: "2",
    title: "New Investment Opportunities in Emerging Markets",
    description:
      "We are excited to announce new investment options in emerging markets, providing our clients with the opportunity to diversify their portfolios and benefit from high-growth sectors.",
  },
  {
    id: "3",
    title: "Understanding the Benefits of Sustainable Investing",
    description:
      "Learn more about sustainable investing and how it aligns with your values while delivering long-term returns. Our firm is committed to offering eco-friendly and socially responsible investment options.",
  },
  // {
  //   id: "4",
  //   title: "Join Our Upcoming Financial Planning Webinar",
  //   description:
  //     "We are hosting a free webinar on financial planning strategies for 2025 and beyond. Join our experts to learn how to maximize your investments and prepare for future economic challenges.",
  // },
  // {
  //   id: "5",
  //   title: "Introducing Our New Portfolio Management Tools",
  //   description:
  //     "We have launched new digital tools that allow clients to track their investment performance and make informed decisions more easily. Explore these features in your online account today.",
  // },
];

export default function NewsAndEvents() {
  return (
    <section className=" bg-black  py-16 px-6">
      <section className="text-white">
        <h2 className=" text-5xl lg:text-6xl mb-3 font-semibold">
          News and <span className=" text-secondary">Events</span>
        </h2>
        <p className=" font-lg mb-4 max-w-screen-sm text-stone-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ab a
          totam labore temporibus quos maiores est laboriosam ipsum asperiores
          repellendus
        </p>
      </section>
      <section className=" grid lg:grid-cols-3  py-6 gap-4">
        {news.map((item) => (
          <article key={item.id} className=" p-7 bg-secondary">
            <h3 className=" font-semibold text-xl mb-3">{item.title}</h3>
            <p className=" text-black line-clamp-4">{item.description}</p>
            <Button className=" w-full mt-6 hover:opacity-80 bg-black text-white">
              Read More
            </Button>
          </article>
        ))}
      </section>
    </section>
  );
}
