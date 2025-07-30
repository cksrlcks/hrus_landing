"use client";

import { useEffect } from "react";

export default function InitScrollbarWidth() {
  useEffect(() => {
    const el = document.createElement("div");
    el.style.visibility = "hidden";
    el.style.overflow = "scroll";
    el.style.position = "absolute";
    el.style.top = "-9999px";
    el.style.width = "100px";
    el.style.height = "100px";

    document.body.appendChild(el);
    const scrollbarWidth = el.offsetWidth - el.clientWidth;
    document.body.removeChild(el);

    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`,
    );
  }, []);

  return null;
}
