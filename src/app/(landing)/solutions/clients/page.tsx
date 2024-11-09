import Image from "next/image";
import Four from "@/app/assets/four.jpg";
import { ChevronRight } from "lucide-react";

const points = [
  "Over 30 years of proven experience running investment trusts",
  "Unparalleled research capabilities and experienced stock pickers",
  "Employ sophisticated risk management techniques",
  "Base decisions on thorough proprietary research",
  "Have local and regional knowledge",
  "Conduct regular meetings with hundreds of companies",
  "Access the resources available from within the wider BlackRock Group",
  "Investment strategies targeting growth and income",
];

export default function ClientsPage() {
  return (
    <div>
      <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row bg-black text-white">
        <div className="md:w-1/2 p-4 md:p-16 flex flex-col justify-center">
          <h2 className="text-orange-500 text-sm font-semibold mb-4">
            CHARITIES & ENDOWMENTS
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Charities & Endowments
          </h1>
          <p className="text-gray-300 mb-8">
            At BlackRock, we've been investing on behalf of UK charities &
            endowments for over thirty years and provide a dedicated offering
          </p>
        </div>
        <div className="md:w-1/2  ">
          <div className="relative h-64 md:h-96">
            <Image
              src={Four}
              alt="Two children lying on grass wearing colorful clothes"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              {[
                "Explore our fund range",
                "How to invest",
                "CAIF application form",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 pb-2"
                >
                  <span className="font-semibold">{item}</span>
                  <ChevronRight className="text-orange-500" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <section className=" max-w-screen-2xl mx-auto p-4 md:p-6 py-8 md:py-16">
        <h3 className=" text-3xl md:text-5xl font-bold mb-4">Why Blackrock</h3>
        <p className=" max-w-screen-lg">
          We aim to understand the challenges that charity trustees and their
          investment committees face, particularly in uncertain markets.
          Generating enough real capital growth and income from their investment
          portfolios to fund their vital work, while managing the ‘risk vs
          reward’ balance. Many charities must deliver against their sustainable
          investment goals and that’s why we’ve built a family of
          charity-focused strategies.
        </p>
      </section>
      <div className=" bg-neutral-950 py-6 md:py-12 ">
        <div className=" p-4 lg:p-12 grid gap-6 lg:grid-cols-2 max-w-screen-2xl mx-auto">
          <section>
            <div className="container overflow-hidden w-full max-w-[890px] mx-auto space-y-2">
              <iframe
                className="mx-auto w-full h-[300px] lg:h-[300px]"
                height="315"
                src="https://www.youtube.com/embed/C0DPdy98e4c?si=NgoDcEfhdy4w08bD"
                title="Interview with our experts"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </section>
          <section className=" grid place-content-center ">
            <h2 className=" text-3xl mb-6 font-semibold">
              Explore our range of investment trusts
            </h2>
            <p className=" text-xl mb-4">
              BlackRock has been helping investors benefit from the advantages
              investment trusts can offer for over 30 years. Find out a little
              more about them in this short video.
            </p>
          </section>
        </div>
      </div>
      <section className="p-6 max-w-screen-2xl mx-auto">
        <h3 className=" text-3xl md:text-5xl mb-6 font-bold">
          Our investment team
        </h3>
        <ul className=" ">
          {points.map((point) => {
            return (
              <li key={point} className="mb-2">
                <span className=" text-gray-500">•</span> {point}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
