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
  "Financial security": {
    title: "Enhancing your financial security",
    subtitle: "Protecting your assets from financial risks",
    content:
      "We help individuals and organizations develop strong financial security by offering a variety of investment options, risk management tools, and financial education programs. Our goal is to create a more secure and resilient financial environment for all.",
    image: One,
  },
  "Investment access": {
    title: "Helping more people retire securely",
    subtitle: "A secure retirement for port workers",
    content:
      "We work closely with Forth Ports to manage a large part of their pension plan that helps employees save for retirement by investing in stocks, bonds, real estate and infrastructure – including ports. In that way, these investments give Forth Ports' employees access to opportunities in the local economy they helped build.",
    image: Two,
  },
  "Sustainable outcomes": {
    title: "Sustainable Investment Strategies",
    subtitle: "Building a better future",
    content:
      "Our sustainable investment strategies focus on long-term value creation while considering environmental, social, and governance factors. We aim to generate positive outcomes for both investors and society at large.",
    image: Three,
  },
  "Economic resilience": {
    title: "Strengthening Economic Foundations",
    subtitle: "Preparing for economic challenges",
    content:
      "We help individuals and organizations build economic resilience through diversified investment strategies, risk management tools, and financial education programs. Our goal is to create a more stable and prosperous economic environment for all.",
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
  const [activeTab, setActiveTab] = useState<string>("Financial security");
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
                  <p className="text-muted-foreground">
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
