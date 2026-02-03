// services/sanityService.js
import { client } from "@/lib/sanity";

export async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    mainImage,
    category,
    publishedAt,
    "body": body[0].children[0].text
  }`;
  const data = await client.fetch(query);
  return data;
}