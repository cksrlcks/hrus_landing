import React from "react";
import { Separator } from "../ui/separator";
import Copyright from "./Copyright";
import Family from "./Family";
import Info from "./Info";
import Inner from "./Inner";

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-[#10122F] to-[#040615] py-20 text-white">
      <Inner className="mb-24 flex flex-col-reverse gap-16 md:flex-row md:justify-between">
        <Info />
      </Inner>
      <Inner>
        <Family />
        <Separator className="my-6 opacity-5" />
        <Copyright />
      </Inner>
    </div>
  );
}
