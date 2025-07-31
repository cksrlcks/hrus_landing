"use client";

import React from "react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Post } from "./type";

type ListProps = {
  target: "privacy" | "terms";
  posts: Post[];
};

export default function List({ target, posts }: ListProps) {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  const handleChange = (slug: string) => {
    router.push(`/${target}/${slug}`);
  };

  return (
    <div className="mb-10">
      <Select value={segment || posts[0].slug} onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder="개인정보처리방침 선택" />
        </SelectTrigger>
        <SelectContent>
          {posts.map((post) => (
            <SelectItem key={post.slug} value={post.slug}>
              {post.metadata.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
