"use client";
import HeroSection from "./_components/hero";
import NewsAndEvents from "./_components/news";
import WhatWeDo from "./_components/whatwedo";
import WhatWeThink from "./_components/what_we_think";
import MarketInsights from "./_components/market_insights";


export default function Home() {
  return (
    <div className={''}>
      <HeroSection />
      {/*<NewsAndEvents />*/}
      <section className=" p-4 md:p-6 max-w-screen-2xl mx-auto">
        <p className=" max-w-screen-md">
          <mark className=" font-semibold">Capital at risk.</mark> The value of
          investments and the income from them can fall as well as rise and are
          not guaranteed. Investors may not get back the amount originally
          invested.
        </p>
      </section>
      <WhatWeDo />
      {/*<WhatWeThink />*/}
      {/*<MarketInsights />*/}
    </div>
  );
}
