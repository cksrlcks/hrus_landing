import React from "react";
import Link from "next/link";
import Inner from "../layout/Inner";
import FadeInStagger from "../ui/FadeInUp";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import PricingTable from "./PricingTable";
import {
  SectionCTA,
  SectionDescription,
  SectionHeader,
  SectionLogo,
  SectionTitle,
} from "./Section";

export default function Pricing() {
  return (
    <div className="bg-gradient-to-b from-[#0F1335] to-[#0F0F0F] py-15 text-white lg:py-30">
      <Inner>
        <div className="mx-auto max-w-[560px]">
          <FadeInStagger>
            <SectionHeader className="mb-16">
              <SectionLogo invert />
              <SectionTitle>
                원하는 기능만 골라서 <br />
                <span className="bg-gradient-to-r from-[#5766FF] to-[#AC7CFF] bg-clip-text text-transparent">
                  시작해 보세요
                </span>
              </SectionTitle>
              <SectionDescription className="text-white/60">
                월 최소 <b className="font-semibold text-white">30,000원</b>으로
                대표님은 경영에만 집중하세요. <br />
                <span className="text-[15px] opacity-70">
                  (기본 구성원 5명 기준)
                </span>
              </SectionDescription>
              <SectionCTA>
                <Button size="lg" asChild>
                  <Link href="/inquiry">도입문의</Link>
                </Button>
              </SectionCTA>
            </SectionHeader>
            <PricingTable />
            {/* 안내사항 */}
            <div className="text-sm text-white/50 md:text-base">
              <Separator className="mt-12 mb-10 opacity-10" />
              <ul className="space-y-1">
                <li>필수 옵션의 구성은 개별 선택할 수 없습니다.</li>
                <li>
                  활성화된 사용자 (퇴사일자가 없는 직원)를 기준으로 과금합니다.
                </li>
                <li>
                  자세한 구독 정책은{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-white underline"
                  >
                    서비스이용약관
                  </Link>
                  을 참고하시길 바랍니다.
                </li>
              </ul>
            </div>
          </FadeInStagger>
        </div>
      </Inner>
    </div>
  );
}
