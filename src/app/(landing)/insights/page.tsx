import { type Metadata } from "next";
import React from "react";
import BlogList from "@/app/(landing)/news/_components/bloglist";
import { getInsights } from "@/shared/queries";

export const metadata: Metadata = {
  title: "Insights",
};

export const revalidate = 30;
export default async function InsightsPage() {
  const posts = await getInsights();
  return (
    <>
      <BlogList posts={posts} baseUrl="insights" />
    </>
  );
}
