import { groq } from "next-sanity";

const SinglePostsMetadata = groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      description,
      "image": mainImage.asset -> url,
    }`;

const Posts = groq`
*[_type == "post"]{
    ...,
    "mainImage": mainImage.asset -> url,
    author->,
  } | order(_createdAt desc)
`;

const SinglePost = groq`
    *[_type == "post" && slug.current == $slug][0]
    {
    ...,
    author->,
      }
  `;

const PostSlug = groq`
    
    *[_type == "post"]
    {
      slug
    }
  `;

export { SinglePostsMetadata, Posts, SinglePost, PostSlug };
