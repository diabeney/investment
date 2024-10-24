"use client";

import { urlFor } from "@/shared/lib/url_for";
import { Post } from "@/shared/entities/post";
import Image from "next/image";
import React, { useState } from "react";
import {
  ArrowDownRightFromSquareIcon,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Divide,
} from "lucide-react";
import ClientSideRoutes from "./client_side_routes";
import { Button } from "@/shared/components/ui/button";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  const [currentPosts, setCurrentPosts] = useState<number>(1);
  const totalPosts = posts?.length;
  const postPerPage = 6;

  const indexOfLastPost = currentPosts * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPostsToShow = posts?.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPost = () => {
    setCurrentPosts(currentPosts + 1);
  };

  const prevPost = () => {
    setCurrentPosts(currentPosts - 1);
  };

  return (
    <div className=" ">
      <div className="md:px-10 px-6 max-w-screen-2xl  mx-auto py-12">
        <section className=" max-w-screen-lg mb-6">
          <h1 className=" text-3xl lg:text-6xl font-bold mb-3">
            Our news and events
          </h1>
          <p>
            Discover a comprehensive range of investment solutions tailored to
            meet your financial goals. From diverse asset classes to insightful
            market analysis and specialized investment themes, we provide the
            tools and resources to help you make informed decisions and achieve
            sustainable growth. Explore how we can help you build a resilient
            and future-ready investment strategy.
          </p>
        </section>
        {!posts && (
          <div className="flex w-full items-center justify-center h-96">
            <p className="text-3xl md:text-4xl font-bold">
              {" "}
              No Posts Available
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16 pb-24 pt-5">
          {currentPostsToShow?.map((post) => (
            <ClientSideRoutes
              key={post._id}
              route={`/news/${post.slug.current}`}
            >
              <div className="flex flex-col border-2 border-black overflow-hidden group cursor-pointer ">
                <div className="relative w-fill h-60 group-hover:scale-105 transition-transform duration-500 ease-out ">
                  <Image
                    className="object-cover md:object-center"
                    src={post.mainImage ? urlFor(post.mainImage)?.url() : ""}
                    alt={post.title}
                    fill
                  />
                </div>
                <section className="">
                  <div className=" p-4 flex-1">
                    <h2 className=" text-xl font-bold">{post.title}</h2>
                    <div className="w-full">
                      <p className="w-fit mt-2 flex items-center gap-2">
                        <Calendar size={18} />
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <p className=" text-secondary py-2 px-4 font-bold flex items-center group-hover:underline">
                    Read Post
                    <ArrowDownRightFromSquareIcon className="ml-2 h-4 w-4 rotate-[270deg]" />
                  </p>
                </section>
              </div>
            </ClientSideRoutes>
          ))}
        </div>
        {!posts ? null : (
          <div className="flex items-center mb-8 justify-center gap-2">
            <button
              className="h-6 w-6 cursor-pointer text-secondary hover:text-secondary/80 transition duration-150 ease-in-out hover:scale-105 disabled:text-gray-400 disabled:cursor-not-allowed"
              onClick={prevPost}
              disabled={currentPosts === 1}
            >
              <ChevronLeft />
            </button>
            {pageNumbers.map((pageNumber) => (
              <Button
                key={pageNumber}
                onClick={() => setCurrentPosts(pageNumber)}
                className={`${
                  currentPosts === pageNumber
                    ? "bg-secondary text-white"
                    : "bg-white text-secondary hover:bg-secondary/70 hover:text-white"
                } h-8 w-8 rounded-full transition duration-150 ease-in-out hover:scale-105`}
              >
                {pageNumber}
              </Button>
            ))}
            <button
              className="h-6 w-6 cursor-pointer text-secondary hover:text-secondary/80 transition duration-150 ease-in-out hover:scale-105 disabled:text-gray-400 disabled:cursor-not-allowed"
              onClick={nextPost}
              disabled={currentPosts === pageNumbers.length}
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
