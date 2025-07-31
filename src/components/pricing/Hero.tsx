import React from "react";
import Image from "next/image";
import AttendanceImage from "@/assets/images/icon-feature-attendance.svg";
import EvalImage from "@/assets/images/icon-feature-eval.svg";
import GoalsImage from "@/assets/images/icon-feature-goals.svg";
import SalaryImage from "@/assets/images/icon-feature-salary.svg";
import Inner from "../layout/Inner";
import FeatureIcon from "../main/FeatureIcon";
import {
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "../main/Section";
import GradientText from "../ui/GradientText";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 left-0 h-[50%] w-full -translate-y-1/2 bg-[#57EEFF] opacity-[0.08] mix-blend-multiply blur-[100px]"></div>

      <Inner className="flex flex-col items-center pt-30 pb-20 lg:pt-60 lg:pb-30">
        <SectionHeader>
          <SectionTitle size="lg">
            원하는 기능만 골라서
            <br />
            <GradientText>시작해 보세요</GradientText>
          </SectionTitle>
          <SectionDescription>
            월 최소 <b className="font-semibold text-black">30,000원</b>으로
            대표님은 경영에만 집중하세요. <br />
            <span className="text-[15px] opacity-70">
              (기본 구성원 5명 기준)
            </span>
          </SectionDescription>
        </SectionHeader>

        <div className="hidden md:block">
          <FeatureIcon className="absolute top-[160px] left-1/2 z-1 -translate-x-[27vw] -translate-y-1/2">
            <Image src={EvalImage} alt="Salary" />
          </FeatureIcon>
          <FeatureIcon className="absolute bottom-[20%] left-1/2 z-1 -translate-x-[32vw] -translate-y-1/2">
            <Image src={SalaryImage} alt="Evaluation" />
          </FeatureIcon>
          <FeatureIcon className="absolute right-1/2 bottom-[28%] z-1 translate-x-[28.5vw] -translate-y-1/2">
            <Image src={AttendanceImage} alt="Goals" />
          </FeatureIcon>
          <FeatureIcon className="absolute top-[24%] right-1/2 z-1 translate-x-[37vw] -translate-y-1/2">
            <Image src={GoalsImage} alt="Attendance" />
          </FeatureIcon>
        </div>
      </Inner>
    </div>
  );
}
