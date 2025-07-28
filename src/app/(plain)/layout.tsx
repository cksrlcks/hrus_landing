import React, { PropsWithChildren } from "react";

export default function PlainLayout({ children }: PropsWithChildren) {
  return (
    <div>
      plain 레이아웃
      {children}
    </div>
  );
}
