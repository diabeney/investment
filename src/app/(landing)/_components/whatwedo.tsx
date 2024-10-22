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
    <section className=" bg-white  py-16 px-6">
      <section className="text-black text-center">
        <h2 className=" text-5xl lg:text-6xl mb-3 font-semibold">
          What We Do.
        </h2>
        <p className=" font-lg mb-4 max-w-screen-sm mx-auto text-stone-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ab a
          totam labore temporibus quos maiores est laboriosam ipsum asperiores
          repellendus
        </p>
      </section>
      <section className=" grid lg:grid-cols-3  py-6 gap-4">
        {whatWeDo.map((item) => (
          <article key={item.id} className=" p-12 border bg-stone-50 ">
            <div className=" p-5 mb-4 bg-stone-200 w-fit rounded-full">
              <Icon icon={item.icon} className=" w-12 h-12 text-secondary" />
            </div>
            <h3 className=" font-semibold text-xl mb-3">{item.title}</h3>
            <p className=" text-black line-clamp-4">{item.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
