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
      <section className=" bg-secondary ">
        <div className=" p-4 lg:p-10  max-w-screen-2xl mx-auto">
          <h2 className=" text-3xl lg:text-6xl font-bold">
            What are multi-asset portfolios
          </h2>
          <p className=" max-w-screen-md mt-6 md:mt-16 text-lg">
            A multi-asset investment portfolio can be accomplished by investing
            in a variety of asset classes – such as stocks, bonds, real estate,
            credit, or cash – to create a more nimble and broadly diversified
            portfolio. Multi-asset fund managers make big-picture decisions and
            balance asset classes to achieve a number of investment incomes.
          </p>
        </div>
      </section>
      <section className=" p-4 md:p-6 max-w-screen-2xl mx-auto">
        <span className=" p-6 bg-black text-white font-semibold text-xl mb-3 block w-fit">
          KEY TAKEAWAYS
        </span>
        <ul className=" flex flex-col lg:flex-row pb-16 border-b-2 border-b-black">
          <li className=" p-2 md:p-4">
            <span className=" text-5xl font-semibold">01.</span>
            <h3 className=" font-semibold text-xl my-4">
              Multi-asset investing
            </h3>
            <p>
              A multi-asset investment fund combines different types of asset
              classes to create a nimble and broadly diversified portfolio.
              Multi-asset portfolios may help you achieve a number of investment
              outcomes
            </p>
          </li>
          <li className=" p-2 md:p-4">
            <span className="text-5xl font-semibold">02.</span>
            <h3 className="font-semibold text-xl my-4">
              Benefits of multi-asset
            </h3>
            <p className="">
              Multi-asset portfolios allow flexibility to meet investment goals
              with broad options for investing across sectors, and more
              diversification than other investment approaches.
            </p>
          </li>
          <li className="p-2 md:p-4">
            <span className="text-5xl font-semibold">03.</span>
            <h3 className="font-semibold text-xl my-4">Choosing a portfolio</h3>
            <p>
              An investment portfolio that works well for one person may not be
              the best fit for another. As with any investment decision, it's
              important to first understand what you're trying to achieve and
              then identify the best portfolio to get there.
            </p>
          </li>
        </ul>
      </section>
      <div className=" p-6 space-y-6 max-w-screen-2xl mx-auto">
        <h1 className=" text-3xl md:text-5xl font-bold">
          What are the benefits of multi-asset investment portfolios?
        </h1>

        <p className="text-lg max-w-screen-md">
          Multi-asset portfolios offer enormous flexibility to meet specific
          investment goals, with broad options for investing across securities
          and sectors. These types of portfolios also offer more diversification
          compared to investing solely in fixed income or equity funds.
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
                Portfolios take a global investment approach and leverage a wide
                set of asset classes, including equities, bonds, cash, and
                alternatives
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
                BlackRock investors use Aladdin®, our internal risk management
                system, to make smarter investment decisions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-black text-white py-8">
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
      </div>
      <div className=" max-w-screen-2xl mx-auto">
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
      </div>
    </div>
  );
}
