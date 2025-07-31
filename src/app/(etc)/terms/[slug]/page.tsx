import React from "react";
import { notFound } from "next/navigation";
import Post from "@/components/terms/Post";
import { getMdxFiles, termsDirectory } from "@/lib/mdx";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getMdxFiles(termsDirectory).find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return <Post post={post} />;
}

export function generateStaticParams() {
  const posts = getMdxFiles(termsDirectory);
  return posts.map((post) => ({ slug: post.slug }));
}
