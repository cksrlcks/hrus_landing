import { PropsWithChildren } from "react";
import Header from "@/components/terms/Header";
import List from "@/components/terms/List";
import { getMdxFiles, privacyDirectory } from "@/lib/mdx";

export default function layout({ children }: PropsWithChildren) {
  const posts = getMdxFiles(privacyDirectory);

  return (
    <>
      <Header>개인정보처리방침</Header>
      <List target="privacy" posts={posts} />
      {children}
    </>
  );
}
