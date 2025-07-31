import React from "react";

type AlertIconProps = {
  color?: string;
  className?: string;
};

export default function AlertIcon({
  color = "#5766FF",
  className,
}: AlertIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="8" cy="8" r="8" fill={color} />
      <rect x="7" y="3" width="2" height="6" fill="white" />
      <rect x="7" y="11" width="2" height="2" fill="white" />
    </svg>
  );
}
