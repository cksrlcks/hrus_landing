import { PropsWithChildren } from "react";
import Header from "@/components/terms/Header";
import List from "@/components/terms/List";
import { getMdxFiles, termsDirectory } from "@/lib/mdx";

export default function layout({ children }: PropsWithChildren) {
  const posts = getMdxFiles(termsDirectory);

  return (
    <>
      <Header>서비스 이용약관</Header>
      <List target="privacy" posts={posts} />
      {children}
    </>
  );
}
