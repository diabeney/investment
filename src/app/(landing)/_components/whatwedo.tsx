import { Button } from "@/shared/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
const whatWeDo = [
  {
    id: "1",
    title: "Real Estate",
    description:
      "Our real estate portfolio invest in high end real estates across all of Europe and ensure the our properties are maintained with high standards and thus able to accrue value over time for our investors.",
    icon: "mdi:account-clock",
  },
  {
    id: "2",
    title: "Microfinancing",
    description:
      "Our microfinancing portfolio focuses on providing short-term loans to businesses facing liquidity or cash flow challenges. Through these loans, we offer timely financial support to companies in critical need, while charging competitive interest rates.",
    icon: "mdi:finance",
  },
  {
    id: "3",
    title: "Stocks",
    description:
      "Our stock and cryptocurrency investment strategy centers on the S&P 500, prioritizing low-risk assets alongside a curated selection of stocks chosen by our seasoned financial advisors.",
    icon: "mdi:chart-line",
  },
];

export default function WhatWeDo() {
  return (
    <section className="  ">
      <div className=" py-16 px-6 max-w-screen-2xl mx-auto">
        <h1 className=" text-3xl md:text-5xl font-extrabold max-w-screen-xl mb-4">
          Funds that match up with investing goals and preferences
        </h1>
        <p className=" max-w-screen-md md:text-xl my-6 md:my-12 mb-3 md:mb-8">
          Each investor has a different story, and we are steadfast partners to
          our clients in the UK because we listen to every one of them. Our full
          range of funds is one way we’re helping more investors build solid
          financial futures.
        </p>
        {/* <section className=" py-4 md:py-12">
        <div className=" relative rounded-full overflow-hidden">
        <input
        type="search"
        placeholder="Search for a fund of ticket"
        className=" w-full focus-within:ring-0 overflow-hidden ring-0 py-4 md:py-8 px-4 lg:px-12 lg:text-xl rounded-full"
        />
        <div className=" bg-black w-fit absolute top-0 p-5 lg:p-[30px] right-0 rounded-full">
        <Icon
        icon="solar:magnifer-outline"
        className=" w-4 h-4 lg:w-8 lg:h-8 text-white"
        />
        </div>
        </div>
        </section> */}
        {/* <section className="text-black text-center">
        <h2 className=" text-4xl lg:text-6xl mb-3 font-semibold">
        What <span className=" text-secondary">We Do</span>
        </h2>
        <p className=" font-lg mb-4 max-w-screen-sm mx-auto text-stone-800">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ab a
        totam labore temporibus quos maiores est laboriosam ipsum asperiores
        repellendus
        </p>
        </section> */}
        <section className=" grid lg:grid-cols-2  py-6 gap-4">
          {whatWeDo.map((item) => (
            <article
              key={item.id}
              className="pt-4 relative z-10 md:px-20 md:pt-20 border border-stone-600 bg-neutral-900 "
            >
              <div className={'px-2'}>
              <div className=" p-5 mb-4 bg-stone-200 w-fit rounded-full">
                <Icon icon={item.icon} className=" w-12 h-12 text-secondary" />
              </div>
              <h3 className=" font-bold text-2xl mb-3">{item.title}</h3>
              <p className=" text-stone-50 line-clamp-4">{item.description}</p>
              </div>
                <button className=" btn items-center font-semibold gap-2 pl-2 w-full mt-3 text-black bg-white hover:opacity-80 line-clamp-1 text-sm md:text-base flex ">
                  <Icon
                    icon={"solar:alt-arrow-right-linear"}
                    className=" text-black"
                  />
                  Learn More about {item.title}
                </button>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
