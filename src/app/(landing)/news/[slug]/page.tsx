import React from "react";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/shared/components/rich_text";
import BackButton from "@/shared/components/back_button";
import { urlFor } from "@/shared/lib/url_for";
import { type Metadata } from "next";
import Image from "next/image";
import NotFound from "@/app/not-found";
import { Post } from "@/shared/entities/post";
import {
  getSinglePost,
  getPostSlug,
  getSinglePostsMetadata,
} from "@/shared/queries/index";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts: Post[] = await getPostSlug();
  const slugRoutes = posts.map((post) => post.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const post = await getSinglePostsMetadata(slug);
  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      images: [
        {
          url: post?.image,
          alt: `${post?.title}'s image`,
        },
      ],
    },
  };
}

export default async function SinglePosts({ params: { slug } }: Props) {
  const posts = await getSinglePost(slug);

  if (posts === null) {
    return <NotFound />;
  }
  return (
    <section className="flex p-4  flex-col items-center justify-center max-w-screen-md 2xl:max-w-screen-lg w-full mx-auto">
      <div className="my-8">
        <div className=" ">
          <BackButton />
        </div>
        <h1 className="text-3xl leading-[1.6] py-4 md:text-5xl md:leading-[4rem] font-semibold text-white ">
          {posts.title}
        </h1>
        <div className="flex flex-row items-center  gap-2 md:gap-x-4 my-5">
          <Image
            src={
              posts.author.image
                ? urlFor(posts.author.image).url()
                : `https://ui-avatars.com/api/name=${posts.author.name}?background=random`
            }
            alt={posts.author.name}
            width={200}
            height={200}
            className="rounded-full w-8 h-8 object-cover object-top "
          />
          <section className="flex flex-col lg:flex-row items-start justify-center lg:items-center">
            <p className="flex items-center justify-center">
              <span className="font-bold">
                {posts.author.name ? `By ${posts.author.name}` : "User"}
              </span>
            </p>
            <span className="hidden md:block text-lg text-gray-500 px-2">
              &#x2022;
            </span>
            <span className=" text-gray-500">
              {new Date(posts._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </section>
        </div>
        <div className="w-full md:h-[20rem]  my-14">
          <Image
            src={urlFor(posts.mainImage).url()}
            alt={posts.title}
            width={2000}
            height={2000}
            className="object-cover object-bottom w-full h-full  shadow-md"
          />
        </div>
        <PortableText value={posts.body} components={RichText} />
      </div>
    </section>
  );
}
