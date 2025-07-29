import React, { PropsWithChildren } from "react";

export default function EtcLayout({ children }: PropsWithChildren) {
  return (
    <div>
      기타 레이아웃
      <br />
      {children}
    </div>
  );
}
