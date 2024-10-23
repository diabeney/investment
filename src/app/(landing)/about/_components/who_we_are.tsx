import Image from "next/image";
import InvestmentImage from "@/app/assets/investment.jpg";

export default function AboutWhoWeAre() {
  return (
    <div className=" p-4 lg:p-10">
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
              Investico Inc., a pioneering investment management company, is
              committed to creating a platform that empowers individuals,
              businesses, and governments to achieve their financial goals.
            </p>
            <br />
            <p>
              Our mission is to help people and businesses navigate the
              complexities of the financial world and make informed decisions
              that lead to long-term success.
            </p>
            <br />
            <p>
              Our team of experienced professionals and advisors work closely
              with clients to create unique, personalized investment strategies
              that deliver long-term value for both individuals and businesses.
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
