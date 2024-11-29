import {
  Posts,
  SinglePost,
  PostSlug,
  SinglePostsMetadata,
  Insights,
  SingleInsights,
  InsightsSlug,
  SingleInsightsMetadata,
} from "@/shared/lib/story_queries";
import { client } from "@/sanity/lib/client";

const getPosts = async () => {
  try {
    return await client.fetch(Posts, {}, { next: { revalidate: 1 } });

  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const getSinglePostsMetadata = async (slug: string) => {
  try {
    return await client.fetch(SinglePostsMetadata, { slug });

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
const getInsights = async () => {
  try {
    const posts = await client.fetch(Insights, {}, { next: { revalidate: 1 } });
    return posts;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const getSingleInsightsMetadata = async (slug: string) => {
  try {
    const metadata = await client.fetch(SingleInsightsMetadata, { slug });
    return metadata;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const getSingleInsight = async (slug: string) => {
  try {
    const post = await client.fetch(
      SingleInsights,
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

const getInsightsSlug = async () => {
  try {
    const post = await client.fetch(
      InsightsSlug,
      {},
      { next: { revalidate: 1 } }
    );
    return post;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

export {
  getPosts,
  getSinglePost,
  getPostSlug,
  getSinglePostsMetadata,
  getInsights,
  getSingleInsight,
  getInsightsSlug,
  getSingleInsightsMetadata,
};
