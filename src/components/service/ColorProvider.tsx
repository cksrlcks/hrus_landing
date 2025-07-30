"use client";

import { createContext, useContext, PropsWithChildren } from "react";

export const colors = {
  blue: {
    text: "#5766FF",
    bg: "#F4F7FF",
    border: "#5766FF",
  },
  red: {
    text: "#EB596D",
    bg: "#FFFBFB",
    border: "#EB596D",
  },
  green: {
    text: "#00AEAE",
    bg: "#F4FEFF",
    border: "#00AEAE",
  },
  yellow: {
    text: "#FFA11E",
    bg: "#FFFCF6",
    border: "#FFA11E",
  },
  default: {
    text: "#6B7280",
    bg: "#F3F4F6",
    border: "#D1D5DB",
  },
};

export type Color = keyof typeof colors;

export function getColorObject(color: Color) {
  return colors[color] || colors.default;
}

type ColorContext = {
  bg: string;
  text: string;
  border: string;
  name: Color;
};

const ColorContext = createContext<ColorContext | null>(null);

export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("프로바이더 내에서 사용해주세요");
  }
  return context;
};

export function ColorProvider({
  children,
  color = "green",
}: PropsWithChildren<{ color: Color }>) {
  const colorObject = getColorObject(color);

  return (
    <ColorContext.Provider value={{ ...colorObject, name: color }}>
      {children}
    </ColorContext.Provider>
  );
}
