"use client";

import { useEffect, useState, useCallback } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
  offsetTop: number;
};

const SCROLL_OFFSET = 140;

export default function useToc() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"));
    const newHeadings = elements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: Number(el.tagName.replace("H", "")),
      offsetTop: (el as HTMLElement).offsetTop,
    }));
    setHeadings(newHeadings);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    let currentActiveId: string = "";

    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      if (scrollY + SCROLL_OFFSET >= heading.offsetTop) {
        currentActiveId = heading.id;
        break;
      }
    }
    setActiveId(currentActiveId);
  }, [headings]);

  useEffect(() => {
    if (headings.length === 0) return;

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings, handleScroll]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveId(id);
    }
  };

  return {
    headings,
    activeId,
    scrollToHeading,
  };
}
