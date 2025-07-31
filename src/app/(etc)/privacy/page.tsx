import React from "react";
import Post from "@/components/terms/Post";
import { getMdxFiles, privacyDirectory } from "@/lib/mdx";

export default function page() {
  const posts = getMdxFiles(privacyDirectory);

  return <Post post={posts[0]} />;
}
