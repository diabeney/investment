import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import Image from "next/image";
import One from "@/app/assets/one.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What is a multi-asset portfolio?",
    answer:
      "A multi-asset portfolio is an investment strategy that combines different asset classes such as stocks, bonds, real estate, and commodities to create a diversified investment portfolio.",
  },
  {
    question: "What is a multi-asset approach?",
    answer:
      "A multi-asset approach involves investing across various asset classes to balance risk and return, aiming to provide more stable and consistent performance over time.",
  },
  {
    question: "Why invest in multi-asset portfolios?",
    answer:
      "Investing in multi-asset portfolios can help spread risk, potentially enhance returns, and provide a buffer against market volatility by diversifying across different asset classes.",
  },
  {
    question: "What is BlackRock's investment strategy?",
    answer:
      "BlackRock's investment strategy focuses on providing a wide range of investment solutions, including multi-asset portfolios, to help clients achieve their financial goals through diversification, risk management, and innovative investment approaches.",
  },
  {
    question: "What is a multi-asset class?",
    answer:
      "A multi-asset class refers to a combination of asset classes (such as equities, fixed income, commodities, and real estate) used within a single investment portfolio or strategy.",
  },
  {
    question: "What are multi-asset funds?",
    answer:
      "Multi-asset funds are investment vehicles that allocate capital across multiple asset classes. These funds aim to provide diversification benefits and balance risk and return potential for investors.",
  },
];

export default function AssetClassesPage() {
  return (
    <div className=" ">
      <section className="  ">
        <div className=" p-4 lg:p-10  max-w-screen-2xl mx-auto">
          <h2 className=" text-3xl lg:text-6xl font-bold">Asset classes</h2>
          <p className=" max-w-screen-md mt-6 md:mt-16 text-lg">
            At BlackCrest, we understand that successful investing requires
            diversification and expertise. That's why we offer a range of
            carefully selected asset classes, each tailored to deliver robust
            returns and align with our clients' financial goals.
          </p>
        </div>
      </section>
      <section className=" p-4 md:p-6 max-w-screen-2xl mx-auto">
        <span className=" p-6 bg-black text-white font-semibold text-xl mb-3 block w-fit">
          KEY TAKEAWAYS
        </span>
        <ul className="  grid md:grid-cols-2 pb-16 border-b-2 border-b-black">
          <li className=" p-2 md:p-4">
            <span className=" text-5xl font-semibold text-secondary">01.</span>
            <h3 className=" font-semibold text-xl my-4 text-secondary">
              Real Estate
            </h3>
            <p>
              Real estate has long been a cornerstone of wealth creation, and at
              BlackCrest, we offer a variety of avenues to capitalize on this
              dynamic asset class. Whether through{" "}
              <strong>fractional ownership</strong> of high-value properties,{" "}
              <strong>buy-to-sell</strong>strategies for quick capital
              appreciation, or <strong>buy-to-let</strong> options for steady
              rental income, we provide a flexible array of opportunities.
              Additionally, our involvement in{" "}
              <strong>new building projects</strong> allows clients to invest in
              emerging developments in prime, high-yield locations. From the
              sun-soaked coasts of <strong>Marbella and Ibiza</strong> to the
              vibrant markets of <strong>Miami, Dubai, and London</strong>
              we specialize in premium properties that promise excellent
              returns.
            </p>
          </li>
          <li className=" p-2 md:p-4">
            <span className="text-5xl font-semibold text-secondary">02.</span>
            <h3 className="font-semibold text-xl my-4 text-secondary">
              Stock Market
            </h3>
            <p className="">
              Navigating the stock market can be complex, but with BlackCrest,
              you gain a trusted partner. Our equity investments focus on a
              balanced approach, encompassing <strong>blue-chip stocks</strong>{" "}
              for stability, <strong>growth stocks</strong> for long-term
              capital appreciation, and{" "}
              <strong>emerging market opportunities</strong> for higher-risk,
              high-reward ventures. We apply sophisticated analytics, market
              trends, and a proactive management style to ensure portfolios not
              only perform well but also align with your financial goals.
            </p>
          </li>
          <li className="p-2 md:p-4">
            <span className="text-5xl font-semibold text-secondary">03.</span>
            <h3 className="font-semibold text-xl my-4 text-secondary">
              Microfinance/Steady Income
            </h3>
            <p>
              For clients seeking consistent returns, our{" "}
              <strong>microfinance solutions</strong> are designed to deliver
              steady income while supporting impactful initiatives. By funding
              small businesses, emerging entrepreneurs, and localized projects,
              you benefit from predictable returns and the satisfaction of
              fostering sustainable growth. This approach provides a unique
              blend of financial stability and social impact, ensuring your
              investments work hard for you while making a difference in the
              world.
            </p>
          </li>
          <li className="p-2 md:p-4">
            <span className="text-5xl font-semibold text-secondary">04.</span>
            <h3 className="font-semibold text-xl my-4 text-secondary">
              Microfinance/Steady Income**
            </h3>
            <p>
              Acquiring established businesses is a powerful way to build
              long-term wealth. Our <strong>acquisition opportunities</strong>{" "}
              focus on ventures with proven profitability, strong management
              teams, and high growth potential. From small-to-medium enterprises
              to larger corporate entities, BlackCrest identifies and
              facilitates acquisitions that match your investment criteria. By
              leveraging our expertise, you gain access to businesses that
              deliver consistent cash flow, market share, and capital
              appreciation over time.
            </p>
          </li>
        </ul>
      </section>
      {/* <div className={"bg-neutral-950"}>
        <div className=" p-8 space-y-6 max-w-screen-2xl mx-auto">
          <h1 className=" text-3xl md:text-5xl font-bold">
            What are the benefits of multi-asset investment portfolios?
          </h1>

          <p className="text-lg max-w-screen-md">
            Multi-asset portfolios offer enormous flexibility to meet specific
            investment goals, with broad options for investing across securities
            and sectors. These types of portfolios also offer more
            diversification compared to investing solely in fixed income or
            equity funds.
          </p>

          <p className="text-lg max-w-screen-md">
            Many multi-asset funds are actively managed, which means a portfolio
            manager and team of investors are using analysis, insights,
            technology, and tools to make informed investment decisions.
            Multi-asset fund managers may choose to invest more assets overseas,
            shift assets from equities to bonds, dial back risk, or seek
            opportunities in non-traditional asset classes – all with the
            intention of driving better investment outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <Card className=" border-none shadow-none">
              <CardHeader className="p-0 mb-2">
                <CardTitle className=" p-0">
                  Broad, unbiased opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p>
                  Portfolios take a global investment approach and leverage a
                  wide set of asset classes, including equities, bonds, cash,
                  and alternatives
                </p>
              </CardContent>
            </Card>

            <Card className=" border-none shadow-none">
              <CardHeader className="p-0 mb-2">
                <CardTitle>Flexible, dynamic portfolios</CardTitle>
              </CardHeader>
              <CardContent className=" p-0">
                <p>
                  Portfolios combine multiple investment approaches and nimbly
                  adapt to changing market conditions
                </p>
              </CardContent>
            </Card>

            <Card className=" border-none shadow-none">
              <CardHeader className=" p-0 mb-2">
                <CardTitle>Risk-first mindset</CardTitle>
              </CardHeader>
              <CardContent className=" p-0">
                <p>
                  BlackRock investors use Aladdin®, our internal risk
                  management system, to make smarter investment decisions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-black text-white py-8">
        <div className=" p-6 mx-auto max-w-screen-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h1 className=" text-3xl md:text-4xl font-bold">
                Why choose BlackRock for multi-asset portfolios?
              </h1>

              <p className="text-xl">
                BlackRock offers a wide range of multi-asset solutions to help
                you achieve your investment goals, no matter what they may be.
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Service</h2>
                  <p>
                    We always serve as a fiduciary to our clients and listen to
                    their needs objectively
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">Scale</h2>
                  <p>
                    We leverage the full breadth of BlackRock's experience,
                    expertise, and <span className="font-bold">technology</span>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">Innovation</h2>
                  <p>
                    We are constantly evolving and innovating to meet changing
                    client objectives and market conditions
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square h-[300px] md:h-[500px] w-full">
              <Image src={One} alt="" className=" h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className=" max-w-screen-2xl mx-auto">
        <div className="max-w-3xl  p-6">
          <h1 className=" text-3xl md:text-4xl font-bold mb-6">
            Multi-asset strategies overview
          </h1>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left md:text-lg">
                  <div className="flex items-center">
                    <ChevronDown className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className=" md:text-lg pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div> */}
    </div>
  );
}
