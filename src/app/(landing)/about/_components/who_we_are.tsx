import Image from "next/image";
import InvestmentImage from "@/app/assets/investment.jpg";

export default function AboutWhoWeAre() {
  return (
    <div className=" max-w-screen-2xl mx-auto p-4 lg:p-10">
      <span>
        <h3 className=" font-semibold">WHO WE ARE</h3>
        <span className=" h-1 w-10 bg-secondary block" />
      </span>
      <section>
        <h2 className=" text-3xl md:text-5xl lg:text-7xl font-bold my-6 md:my-16">
          Bringing financial well-being to the most important economies of all
        </h2>
        <section className=" grid place-items-center gap-4 md:grid-cols-2">
          <div className=" text-lg">
            <p>
              Blackcrest Capital Group is a uniquely proactive investment firm, constantly scouting for top-performing assets to maximize returns for our investors. With years of expertise in real estate, stocks, and microfinancing, our lead advisors bring deep industry insight, ensuring that your investments are both secure and positioned for optimal market returns
            </p>
            <br />
            <p>
              Blackcrest Capital Group offers investors three distinct investment options: real estate, microfinancing, and stocks. Investors can choose a customized mix of these investments or opt for all three, based on their individual risk tolerance and financial goals
            </p>
            <br />
            <p>
              We offer financial planning support as a free part of the package to all our clients and ensure you’re guided in choosing the best investment that suits your lifestyle. We help footballers preserve their capital well after their careers and ensure they have a steady flow of returns from their investments.
            </p>
          </div>
          <div className=" h-[300px] md:h-[500px] w-full">
            <Image
              src={InvestmentImage}
              alt="investment"
              className=" h-full w-full object-cover object-center"
            />
          </div>
        </section>
      </section>
    </div>
  );
}
