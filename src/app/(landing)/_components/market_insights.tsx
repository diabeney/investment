import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function MarketInsights() {
  return (
    <div className="  ">
      <div className=" py-20 p-4   grid gap-4 md:grid-cols-2 max-w-screen-2xl mx-auto">
        <section className=" grid place-content-center">
          <h1 className=" mb-4 text-3xl font-semibold">
            Market Insights and <span className=" text-secondary">Trends</span>
          </h1>
          <p className=" max-w-screen-sm mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            est suscipit nostrum adipisci esse architecto eligendi iusto
            expedita asperiores quasi.
          </p>
        </section>
        {/* <section>
        <h1 className=" text-center mb-4 text-4xl lg:text-6xl font-semibold">
        Market Insights and <span className=" text-secondary">Trends</span>
        </h1>
        <p className=" max-w-screen-sm mb-10 lg:mb-20 mx-auto">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        est suscipit nostrum adipisci esse architecto eligendi iusto expedita
        asperiores quasi.
        </p>
        </section> */}
        <div className=" max-w-screen-lg drop-shadow-md bg-neutral-950 p-8  mx-auto ">
          <section className=" flex flex-col gap-2 md:px-6">
            <Link
              href={"/"}
              className=" text-lg md:text-2xl hover:bg-neutral-800 font-semibold border-b py-4 flex items-center justify-between border-b-black"
            >
              How to invest with Investice Inc.
              <Icon icon={"solar:alt-arrow-right-linear"} />
            </Link>
            <Link
              href={"/"}
              className=" text-lg md:text-2xl hover:bg-neutral-800 font-semibold border-b py-4 flex items-center justify-between border-b-black"
            >
              How to invest with us
              <Icon icon={"solar:alt-arrow-right-linear"} />
            </Link>
            {/* <Link
            href={"/"}
            className=" text-lg md:text-2xl hover:bg-stone-50 font-semibold border-b py-4 flex items-center justify-between border-b-black"
            >
            How to invest with us
            <Icon icon={"solar:alt-arrow-right-linear"} />
            </Link> */}
          </section>
        </div>
      </div>
    </div>
  );
}
