import { Button } from "@/shared/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

const whatWeDo = [
  {
    id: "real-estate",
    title: "Real Estate",
    description:
      "Harness the power of tangible assets through strategic property investments. From commercial developments to residential projects, our real estate offerings provide stability, growth potential, and a hedge against inflation.",
    icon: "mdi:home-city-outline", // Represents properties and urban investments
  },
  {
    id: "stock-market",
    title: "Stock Market",
    description:
      "Our equity investments are tailored to maximize returns while managing risk. Leveraging our market expertise, we craft portfolios encompassing blue-chip stocks, emerging markets, and innovative sectors that align with your investment objectives.",
    icon: "mdi:chart-line", // Represents stock market trends and growth
  },
  {
    id: "microfinance",
    title: "Microfinance/Steady Income",
    description:
      "Generate reliable, steady income through our microfinance options. By funding small businesses and growth initiatives, you gain consistent returns while supporting entrepreneurship and local economies.",
    icon: "mdi:hand-coin", // Represents funding and financial support
  },
  {
    id: "acquisitions",
    title: "Acquisitions",
    description:
      "Explore opportunities to acquire established businesses with proven track records. With our guidance, you’ll gain ownership of ventures poised for growth, delivering substantial long-term returns.",
    icon: "mdi:briefcase-outline", // Represents business acquisitions and corporate ventures
  },
];

export default function WhatWeDo() {
  return (
    <section className="  ">
      <div className=" py-16 px-6 max-w-screen-2xl mx-auto">
        <h1 className=" text-3xl md:text-5xl font-extrabold max-w-screen-xl mb-4">
          BlackCrest: Investing in Tomorrow's Success
        </h1>
        <p className=" max-w-screen-md md:text-xl my-6 md:my-12 mb-3 md:mb-8">
          Each investor has a different story, and we are steadfast partners to
          our clients in the UK because we listen to every one of them. Our full
          range of funds is one way we’re helping more investors build solid
          financial futures.
        </p>
        <section className=" grid lg:grid-cols-3  py-6 gap-4">
          {whatWeDo.map((item) => (
            <article
              key={item.id}
              className=" relative z-10 border  border-stone-600 bg-neutral-900 "
            >
              <div className={"p-4 "}>
                <div className={"px-2"}>
                  <div className=" p-5 mb-4 bg-stone-200 w-fit rounded-full">
                    <Icon
                      icon={item.icon}
                      className=" w-12 h-12 text-secondary"
                    />
                  </div>
                  <h3 className=" font-bold text-2xl mb-3">{item.title}</h3>
                  <p className=" text-stone-50 line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </div>
              <button className=" btn items-center font-semibold gap-2 pl-4 w-full mt-3 text-black bg-white hover:opacity-80 line-clamp-1 text-sm md:text-base flex ">
                <Icon
                  icon={"solar:alt-arrow-right-linear"}
                  className=" text-black"
                />
                Learn More about {item.title.replace(/\/\w+/g, "")}
              </button>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
