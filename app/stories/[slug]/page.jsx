import { client } from "@/lib/sanity";
import StoryClient from "./StoryClient"; // Import client component

async function getStory(slug) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
            title,
            "imageUrl": mainImage.asset->url,
            body,
            publishedAt
        }`;
    return await client.fetch(query, { slug }); 
}

export default async function StoryPage({ params }) {
    const { slug } = await params; 
    const story = await getStory(slug);

    return <StoryClient story={story} />;
}