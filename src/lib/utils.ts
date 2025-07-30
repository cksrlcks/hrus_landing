import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function blurFocus() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}
