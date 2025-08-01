import React from "react";
import Image from "next/image";
import MotivationImage from "@/assets/images/main/motivation.svg";
import Inner from "../layout/Inner";
import FadeInStagger from "../ui/FadeInUp";
import { SectionDescription, SectionHeader, SectionTitle } from "./Section";

export default function Motivation() {
  return (
    <div className="bg-gradient-to-b from-[#FBFEFE] to-[#F9FDFC] py-15 lg:py-30">
      <FadeInStagger>
        <Inner className="relative">
          <SectionHeader className="lg:items-start lg:text-left">
            <span className="text-point mb-6 font-semibold md:text-lg lg:text-[20px]">
              중소기업의 HR관리를 한눈에, 한번에
            </span>
            <SectionTitle className="lg:text-left">
              쏟아지는 핵심 업무로 <br />
              인사관리에 시간이 부족한가요?
            </SectionTitle>
            <SectionDescription className="lg:text-left">
              HR US는 인사관리의 전 과정을 자동화하고, <br />
              CEO가 다시 경영에 집중할 수 있도록 돕습니다
            </SectionDescription>
          </SectionHeader>

          <Image
            src={MotivationImage}
            alt="Motivation"
            className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2"
          />
        </Inner>
      </FadeInStagger>
    </div>
  );
}
