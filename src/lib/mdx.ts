import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Post } from "@/components/terms/type";

export const termsDirectory = path.join(process.cwd(), "_mdx", "terms");
export const privacyDirectory = path.join(process.cwd(), "_mdx", "privacy");

export function getMdxFiles(directoryPath: string) {
  const files = fs
    .readdirSync(directoryPath)
    .filter((file) => path.extname(file) === ".mdx");

  const posts = files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const fileData = fs.readFileSync(path.join(directoryPath, file), "utf-8");
      const { data: metadata, content } = matter(fileData);

      return { slug, metadata, content } as Post;
    })
    .sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1));

  return posts;
}
