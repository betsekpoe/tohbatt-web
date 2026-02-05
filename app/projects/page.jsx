import { client } from "@/lib/sanity";
import Link from "next/link";
import ProjectsClient from "./ProjectsClient"; // Import the client component

async function getProjects() {
  // Fetching the real data from your Sanity Studio
  return await client.fetch(`*[_type == "post"]{ 
    title, 
    "category": categories[0]->title, 
    "imageUrl": mainImage.asset->url, 
    "slug": slug.current,
    body 
  }`);
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <ProjectsClient projects={projects} />
  );
}