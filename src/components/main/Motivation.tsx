import React from "react";
import Image from "next/image";
import MotivationImage from "@/assets/images/main/motivation.svg";
import Inner from "../layout/Inner";
import { SectionDescription, SectionHeader, SectionTitle } from "./Section";

export default function Motivation() {
  return (
    <div className="bg-gradient-to-b from-[#FBFEFE] to-[#F9FDFC] py-30">
      <Inner className="relative">
        <SectionHeader className="items-start text-left">
          <span className="text-point mb-6 text-[20px] font-semibold">
            중소벤처기업의 HR관리를 한눈에, 한번에
          </span>
          <SectionTitle className="text-left">
            쏟아지는 핵심 업무로 <br />
            인사관리에 시간이 부족한가요?
          </SectionTitle>
          <SectionDescription className="text-left">
            HR US는 인사관리의 전 과정을 자동화하고, <br />
            CEO가 다시 경영에 집중할 수 있도록 돕습니다
          </SectionDescription>
        </SectionHeader>

        <Image
          src={MotivationImage}
          alt="Motivation"
          className="absolute top-1/2 left-[calc(50%+100px)] -translate-y-1/2"
        />
      </Inner>
    </div>
  );
}
