import { type Metadata } from "next";
import React from "react";
import BlogList from "@/app/(landing)/news/_components/bloglist";
import { getPosts } from "@/shared/queries";

export const metadata: Metadata = {
  title: "News",
};

export const revalidate = 30;
export default async function NewsPage() {
  const posts = await getPosts();

  return (
    <>
      <BlogList posts={posts} />
    </>
  );
}
