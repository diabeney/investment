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

const process = [
  {
    id: "screening",
    title: "Screening",
    description:
      "We prioritize integrity. Every client undergoes a comprehensive screening to verify their background and income source.",
    subcontent: null,
  },
  {
    id: "personalizedPlanning",
    title: "Personalized Planning",
    description:
      "No two investors are alike. We develop custom portfolios based on a deep understanding of your financial goals, preferences, and risk tolerance.",
    subcontent: null,
  },
  {
    id: "executionExcellence",
    title: "Execution with Excellence",
    description:
      "Once the plan is set, our experts manage your portfolio with precision, ensuring that every decision aligns with your objectives.",
    subcontent: {
      minimumInvestment: "€50,000",
      averageROI: "11% annually",
      summary:
        "Your journey with BlackCrest begins with a commitment to excellence, and our proven track record speaks for itself.",
    },
  },
];

export default function ClientsPage() {
  return (
    <div>
      <div className="flex max-w-screen-2xl mx-auto flex-col md:flex-row bg-black text-white">
        <div className="md:w-1/2 p-4 md:p-16 flex flex-col justify-center">
          <h2 className="text-orange-500 text-sm font-semibold mb-4">
            CLIENTS
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Clients: Built on Trust and Transparency
          </h1>
          <p className="text-gray-300 mb-8">
            At BlackCrest, confidentiality, security, and transparency form the
            foundation of our client relationships. Our bespoke investment
            services cater to high-net-worth individuals seeking tailored
            solutions to grow their wealth.
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
        </div>
      </div>
      <div className=" p-6 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Process</h1>
        <section className=" grid lg:grid-cols-3 py-6 gap-4">
          {process.map((item, index) => (
            <article
              key={item.id}
              className=" relative z-10 border  border-stone-600 bg-neutral-900 "
            >
              <div className={"p-4 "}>
                <div className={"px-2"}>
                  <h3 className=" font-bold text-secondary text-2xl mb-3">
                    {index + 1}. {item.title}
                  </h3>
                  <p className=" text-stone-50 line-clamp-4">
                    {item.description}
                  </p>
                  {item.subcontent && (
                    <>
                      <ul className=" mt-3">
                        <li>
                          Minimum Investment:{" "}
                          {item.subcontent.minimumInvestment}
                        </li>
                        <li>Average ROI: {item.subcontent.averageROI}</li>
                      </ul>
                      <p className="mt-3">{item.subcontent.summary}</p>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
      <section className=" max-w-screen-2xl mx-auto p-4 md:p-6 py-8 md:py-16">
        <h3 className=" text-3xl md:text-5xl font-bold mb-4">
          Why Choose BlackCrest?
        </h3>
        <p className=" max-w-screen-lg">
          - Expertise You Can Trust: With years of experience in high-stakes
          investment management, our team is equipped to navigate volatile
          markets and capitalize on opportunities.
        </p>
        <br />
        <p className=" max-w-screen-lg">
          - Personalized Service: Every client receives individualized
          attention, ensuring investments align with their unique goals.
        </p>
        <br />
        <p className=" max-w-screen-lg">
          - Proven Returns: Consistently delivering above-average returns, we
          make your financial success our priority.
        </p>
        <br />
        <p className=" max-w-screen-lg">
          - Comprehensive Support: From onboarding to portfolio management, we
          offer full-spectrum support to optimize your investment journey.
        </p>
      </section>
      {/* <div className=" bg-neutral-950 py-6 md:py-12 ">
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
      </section> */}
    </div>
  );
}
