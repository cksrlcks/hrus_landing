import React from "react";
import Hero from "@/components/service/Hero";
import SubNav from "@/components/service/Nav";

export default function page() {
  return (
    <>
      <Hero>근태 페이지</Hero>
      <SubNav />
      <div className="flex h-[800px] items-center justify-center">본문내용</div>
    </>
  );
}
