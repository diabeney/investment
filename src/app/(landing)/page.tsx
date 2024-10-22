"use client";
import HeroSection from "./_components/hero";
import NewsAndEvents from "./_components/news";
import WhatWeDo from "./_components/whatwedo";
import WhatWeThink from "./_components/what_we_think";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewsAndEvents />
      <WhatWeDo />
      <WhatWeThink />
    </div>
  );
}
