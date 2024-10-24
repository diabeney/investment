import Image from "next/image";
import Three from "@/app/assets/three.jpg";

export default function ResourcesPage() {
  return (
    <div className="bg-[#f5f3e9] ">
      <div className="max-w-screen-2xl mx-auto p-4 md:p-16">
        <header className="mb-8">
          <h2 className=" font-semibold text-black uppercase border-b border-red-500 inline-block pb-1">
            BlackRock Solutions
          </h2>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn how to invest
            </h1>

            <div className="space-y-4 ">
              <p>
                This page contains investment related contact details for your
                choice of funds like Unit Trusts, Offshore Funds and Investment
                Trusts. You will also see other relevant information such as
                opening an account, investment limits, charges etc.
              </p>

              <p className="text-xs">
                BlackRock recommends that investors see a qualified financial
                adviser before making a long-term investment decision.
              </p>

              <p>
                All investments involve some degree of risk, and your money may
                be tied up for some time. It is therefore important to act on
                the best advice available before embarking on more complex
                savings plans such as pensions or funds that aim to meet school
                fees. Alternatively, investors can talk to BlackRock's Investor
                Services team for general enquiries; please note that our team
                are not authorised to provide any financial advice.
              </p>

              <p className="font-semibold">
                Capital at risk: All financial investments involve an element of
                risk. Therefore, the value of your investment and the income
                from it will vary and your initial investment amount cannot be
                guaranteed.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3">
            <Image
              src={Three}
              alt="Person painting a wall red"
              width={400}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
