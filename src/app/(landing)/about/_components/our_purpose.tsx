"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import One from "@/app/assets/one.jpg";
import Two from "@/app/assets/two.jpg";
import Three from "@/app/assets/three.jpg";
import Four from "@/app/assets/four.jpg";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ContentItem {
  title: string;
  subtitle: string;
  content: string;
  image: StaticImageData;
}

interface ContentData {
  [key: string]: ContentItem;
}

const contentData: ContentData = {
  "Real estate": {
    title: "Premium European Property Investments",
    subtitle: "High-value properties across Europe, expertly maintained to maximize long-term returns.",
    content:
      "Our real estate portfolio invest in high end real estates across all of Europe and ensure the our properties are maintained with high standards and thus able to accrue value over time for our investors.",
    image: One,
  },
  "Microfinancing": {
    title: "Short-Term Business Lending",
    subtitle: "Quick liquidity solutions for businesses, with interest income for our investors.",
    content:
      "Our microfinancing portfolio focuses on providing short-term loans to businesses facing liquidity or cash flow challenges. Through these loans, we offer timely financial support to companies in critical need, while charging competitive interest rates. We have partnered with companies such as Raal La Louviere, assisting them with financing for their Whoop investment, as well as 4theplayers Academy and many other in similar need.",
    image: Two,
  },
  "Stocks": {
    title: "Curated Stock & Crypto Portfolios",
    subtitle: " Low-risk S&P 500 and expert-selected stocks with a record of high returns.",
    content:
      "Our stock and cryptocurrency investment strategy centers on the S&P 500, prioritizing low-risk assets alongside a curated selection of stocks chosen by our seasoned financial advisors. Our lead advisor, with over six years of active stock market experience, has a proven track record for identifying high-potential opportunities. In 2019, he pinpointed Nio—a Chinese electric vehicle company—when it was valued at just $1 per share; by 2021, it had surged to $60. This is just one example of the many successful investments he has directed us toward, with numerous other carefully selected stocks delivering remarkable returns",
    image: Three,
  },
};

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

export default function OurPurpose(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string>("Real estate");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const tabs = Object.keys(contentData);

  const handleNext = (): void => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };

  const handlePrev = (): void => {
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex]);
  };

  return (
    <div className="  bg-stone-100 ">
      <div className="p-4 lg:p-12 max-w-screen-2xl mx-auto">
        <span>
          <h3 className=" font-semibold">WHAT WE DO</h3>
          <span className=" h-1 w-10 bg-secondary block" />
        </span>
        <div className="flex flex-col md:flex-row py-6">
          <nav className={`${isMobile ? "w-full overflow-x-auto" : "w-64"}`}>
            <ul className={`${isMobile ? "flex space-x-4" : "space-y-2"}`}>
              {tabs.map((item) => (
                <li key={item} className={isMobile ? "flex-shrink-0" : ""}>
                  <button
                    onClick={() => setActiveTab(item)}
                    className={`whitespace-nowrap text-left py-2 rounded transition-colors ${
                      activeTab === item
                        ? " text-secondary font-semibold"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <main className="flex-1 lg:p-6">
            <Card className="w-full mt-4 lg:mt-0 bg-white border-none rounded-none">
              <CardHeader className="flex flex-row items-center justify-between">
                {isMobile && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={handlePrev}>
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleNext}>
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2 ">
                <div className=" h-[300px] md:h-[500px]">
                  <Image
                    src={contentData[activeTab].image}
                    alt={contentData[activeTab].title}
                    width={2000}
                    height={2000}
                    className="object-cover h-full w-full object-center"
                  />
                </div>
                <div>
                  <h3 className=" text-2xl md:text-3xl font-semibold mb-6">
                    {contentData[activeTab].title}
                  </h3>
                  <h3 className="text-lg font-semibold mb-2">
                    {contentData[activeTab].subtitle}
                  </h3>
                  <p className="text-stone-700">
                    {contentData[activeTab].content}
                  </p>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
