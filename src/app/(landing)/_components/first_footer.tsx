"use client";

import Link from "next/link";
import { footerData } from "@/shared/constants/footer_links";
import { solutionsData } from "@/shared/constants/footer_links";
import { useState } from "react";
import { Button } from "@/shared/components/ui/button";

export default function FirstFooter() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className=" bg-neutral-900">
      <footer className="bg-neutral-900 text-white py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b">
              {footerData.aboutUs.title}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {footerData.aboutUs.columns.map((column, columnIndex) => (
                <div key={columnIndex}>
                  <ul className="space-y-2">
                    {column.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className="hover:underline">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b">
              {footerData.funds.title}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {footerData.funds.columns.map((column, columnIndex) => (
                <div key={columnIndex}>
                  <h3 className="text-lg font-semibold mb-2 border-b">
                    {column.title}
                  </h3>
                  <ul className="space-y-2">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className="hover:underline">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={column.viewAll.href}
                    className="inline-block mt-4 hover:underline"
                  >
                    {column.viewAll.text} &gt;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
      {showMore && (
        <section className="bg-neutral-900 text-white py-12 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 border-b">
              {solutionsData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutionsData.columns.map((column, columnIndex) => (
                <div key={columnIndex}>
                  <h3 className="text-2xl font-semibold mb-6 border-b border-b-stone-500">
                    {column.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {column.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4 className="text-lg font-medium mb-3">
                          {section.title}
                        </h4>
                        <ul className="space-y-2">
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link
                                href="#"
                                className="hover:underline text-sm"
                              >
                                {link}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {section.viewAll && (
                          <Link
                            href={section.viewAll.href}
                            className="inline-block mt-4 hover:underline text-sm"
                          >
                            {section.viewAll.text} &gt;
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <div className=" w-fit mx-auto pb-6">
        <Button
          onClick={() => setShowMore((isShown) => !isShown)}
          className=" px-6 py-3 w-fit mx-auto text-black bg-white"
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
}
