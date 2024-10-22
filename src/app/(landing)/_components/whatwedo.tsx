import { Button } from "@/shared/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
const whatWeDo = [
  {
    id: "1",
    title: "Wealth Management",
    description:
      "Our wealth management services are tailored to help you grow and preserve your assets, ensuring your financial goals are met with personalized strategies and expert guidance.",
    icon: "mdi:finance",
  },
  {
    id: "2",
    title: "Investment Advisory",
    description:
      "We offer professional investment advice to help you navigate complex markets and make informed decisions. Our advisors work closely with you to craft a portfolio that aligns with your risk tolerance and objectives.",
    icon: "mdi:chart-line",
  },
  {
    id: "3",
    title: "Retirement Planning",
    description:
      "Secure your financial future with our comprehensive retirement planning services. We help you create a roadmap to achieve your retirement goals and enjoy peace of mind in your later years.",
    icon: "mdi:account-clock",
  },
  {
    id: "4",
    title: "Estate Planning",
    description:
      "Our estate planning services help you protect your legacy and ensure your assets are distributed according to your wishes. We provide expert guidance on wills, trusts, and tax-efficient strategies.",
    icon: "mdi:file-document-box-check",
  },
  {
    id: "5",
    title: "Tax Optimization",
    description:
      "Maximize your investment returns with our tax optimization strategies. We work with you to minimize tax liabilities and increase the efficiency of your investment portfolio.",
    icon: "mdi:calculator",
  },
  {
    id: "6",
    title: "Risk Management",
    description:
      "We help you manage financial risks by providing risk assessment and mitigation strategies. Our goal is to ensure that your investment portfolio is resilient against market volatility.",
    icon: "mdi:shield-alert",
  },
  {
    id: "7",
    title: "Alternative Investments",
    description:
      "Explore opportunities beyond traditional asset classes with our alternative investment options, including private equity, hedge funds, and real estate.",
    icon: "mdi:domain",
  },
  {
    id: "8",
    title: "Education Planning",
    description:
      "Plan for your children's education with our dedicated education planning services. We assist in setting up investment accounts that can grow over time, ensuring a bright future for your loved ones.",
    icon: "mdi:school",
  },
];

export default function WhatWeDo() {
  return (
    <section className=" bg-stone-100  ">
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
              className=" px-2 pt-4 relative z-10 md:px-20 md:pt-20 border bg-white "
            >
              <div className=" p-5 mb-4 bg-stone-200 w-fit rounded-full">
                <Icon icon={item.icon} className=" w-12 h-12 text-secondary" />
              </div>
              <h3 className=" font-bold text-2xl mb-3">{item.title}</h3>
              <p className=" text-black line-clamp-4">{item.description}</p>
              <div className="  bg-black w-full  md:w-4/5  mt-4">
                <Button className=" w-full hover:opacity-80 line-clamp-1 flex text-sm  md:text-base lg:items-center text-left text-white">
                  <Icon
                    icon={"solar:alt-arrow-right-linear"}
                    className=" text-secondary"
                  />
                  Learn More about {item.title}
                </Button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
