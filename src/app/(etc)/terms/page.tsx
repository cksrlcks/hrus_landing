import React from "react";
import Post from "@/components/terms/Post";
import { getMdxFiles, termsDirectory } from "@/lib/mdx";

export default function page() {
  const posts = getMdxFiles(termsDirectory);

  return <Post post={posts[0]} />;
}
