import {
  Posts,
  SinglePost,
  PostSlug,
  SinglePostsMetadata,
} from "@/shared/lib/story_queries";
import { client } from "@/sanity/lib/client";

const getPosts = async () => {
  try {
    const posts = await client.fetch(Posts, {}, { next: { revalidate: 1 } });
    return posts;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const getSinglePostsMetadata = async (slug: string) => {
  try {
    const metadata = await client.fetch(SinglePostsMetadata, { slug });
    return metadata;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const getSinglePost = async (slug: string) => {
  try {
    const post = await client.fetch(
      SinglePost,
      { slug },
      { next: { revalidate: 1 } }
    );
    return post;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const getPostSlug = async () => {
  try {
    const post = await client.fetch(PostSlug, {}, { next: { revalidate: 1 } });
    return post;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

export { getPosts, getSinglePost, getPostSlug, getSinglePostsMetadata };
