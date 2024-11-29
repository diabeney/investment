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
  "Real Estate": {
    title: "Real Estate",
    subtitle: "Invest in tangible property assets.",
    content:
      "Harness the power of tangible assets through strategic property investments. From commercial developments to residential projects, our real estate offerings provide stability, growth potential, and a hedge against inflation.",
    image: One,
  },
  "Stock Market": {
    title: "Stock Market",
    subtitle: "Maximize returns through equities.",
    content:
      "Our equity investments are tailored to maximize returns while managing risk. Leveraging our market expertise, we craft portfolios encompassing blue-chip stocks, emerging markets, and innovative sectors that align with your investment objectives.",
    image: Two,
  },
  Microfinance: {
    title: "Microfinance/Steady Income",
    subtitle: "Earn reliable income by funding growth.",
    content:
      "Generate reliable, steady income through our microfinance options. By funding small businesses and growth initiatives, you gain consistent returns while supporting entrepreneurship and local economies.",
    image: Three,
  },
  Acquisitions: {
    title: "Acquisitions",
    subtitle: "Own businesses with proven potential.",
    content:
      "Explore opportunities to acquire established businesses with proven track records. With our guidance, you’ll gain ownership of ventures poised for growth, delivering substantial long-term returns.",
    image: Four,
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
  const [activeTab, setActiveTab] = useState<string>("Real Estate");
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
    <div className="  bg-neutral-950 ">
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
            <Card className="w-full bg-black mt-4 lg:mt-0 border-none rounded-none">
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
                  <p className="text-stone-200">
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
