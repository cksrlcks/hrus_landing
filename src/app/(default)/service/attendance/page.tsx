import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FeatureIcon from "@/assets/images/main/icon-feature-attendance.svg";
import ServiceImage01 from "@/assets/images/service/attendance/f-1.svg";
import ServiceImage02 from "@/assets/images/service/attendance/f-2.svg";
import ServiceImage03 from "@/assets/images/service/attendance/f-3.svg";
import ServiceImage04 from "@/assets/images/service/attendance/f-4.svg";
import ServiceImage05 from "@/assets/images/service/attendance/f-5.svg";
import HeroImage from "@/assets/images/service/attendance/hero.svg";
import { ColorProvider } from "@/components/service/ColorProvider";
import {
  Feature,
  FeatureImage,
  FeatureSection,
  FeatureContent,
  FeatureList,
  FeatureTitle,
  FeatureSectionWrapper,
  FeatureSupport,
  SupportExcel,
} from "@/components/service/Feature";
import {
  ServiceFeatures,
  ServiceHeader,
  ServiceHero,
  ServiceIcon,
  ServiceName,
  ServicePreview,
  ServiceTitle,
  ServiceTop,
} from "@/components/service/Hero";
import { Button } from "@/components/ui/button";
import { siteUrl } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "일하는 방식이 달라졌다면, 관리도 달라져야 하니까 | HRUS",
  description:
    "중소기업을 위한 인사경영혁신 솔루션, 함께 성장하고 나아가는 조직을 만듭니다.",
};

export default function page() {
  return (
    <ColorProvider color="blue">
      <ServiceHero>
        <ServiceHeader>
          <ServiceTop>
            <ServiceIcon src={FeatureIcon} alt="근태" />
            <ServiceName>근태</ServiceName>
          </ServiceTop>
          <ServiceTitle>
            일하는 방식이 달라졌다면,
            <br />
            관리도 달라져야 하니까
          </ServiceTitle>
          <ServiceFeatures
            data={[
              "구성원별 근무/휴무 기준 설정",
              "구성원 근무현황 한눈에 보기",
              "초과근무 / 출장,외근 / 유연근무 신청, 관리",
              "출장/외근, 차량사용현황 관리",
              "휴무 신청, 관리 / 연차촉진 프로세스 지원",
            ]}
          />
          <Button size="lg" asChild>
            <Link href="/inquiry">도입문의</Link>
          </Button>
        </ServiceHeader>
        <ServicePreview>
          <Image src={HeroImage} alt="근태-근무현황" priority />
        </ServicePreview>
      </ServiceHero>
      <FeatureSectionWrapper>
        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                모든 구성원이 똑같을 필요 없죠. <br />
                근무와 휴무 기준, 유연하게 설정해보세요
              </FeatureTitle>
              <FeatureList
                features={[
                  "근무기준 (근로시간, 휴게시간) 설정",
                  "휴무기준 (연차 지급/소멸기준, 휴가 및 휴직 부여 기준) 설정",
                  "각 기준별 적용대상 지정, 관리",
                ]}
              />
            </FeatureContent>

            <FeatureImage src={ServiceImage01} alt="근태" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature reverse>
            <FeatureContent>
              <FeatureTitle>
                구성원들의 근무현황, <br />
                언제 어디서든 실시간으로 파악할 수 있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "재직중인 구성원별 근무 현황 실시간 조회 \n(출/퇴근, 휴게, 지각, 연차, 휴가, 휴직, 출장/외근 상태)",
                  "사용자 개인별 주간, 월간 근무/초과근무 시간 조회",
                ]}
              />
              <FeatureSupport>
                <SupportExcel />
              </FeatureSupport>
            </FeatureContent>
            <FeatureImage src={ServiceImage02} alt="근태" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                유연근무, 초과근무, 출장/외근…
                <br />
                다양한 근무 신청은 간단하게, 처리는 한 번에!
              </FeatureTitle>
              <FeatureList
                features={[
                  "근무형태별 신청 및 승인 \n (전자결재 모듈 사용 시 적용)",
                  "신청내역 조회, 취소신청 및 승인",
                  "구성원별 적용 중인 근무형태별 현황 조회",
                  "출장/외근 신청 시 차량사용 유무에 따른 차량 운행일지 작성",
                ]}
              />
              <FeatureSupport>
                <SupportExcel />
              </FeatureSupport>
            </FeatureContent>
            <FeatureImage src={ServiceImage03} alt="근태" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature reverse>
            <FeatureContent>
              <FeatureTitle>
                연차, 휴가, 휴무 신청부터 사용내역까지
                <br />
                투명하고 정확하게 관리할 수 있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "구성원별 휴무 부여 및 사용 이력 조회",
                  "휴무 신청내역 조회, 취소신청 및 승인",
                  "연차 수동 부여/차감 기능",
                ]}
              />
              <FeatureSupport>
                <SupportExcel />
              </FeatureSupport>
            </FeatureContent>
            <FeatureImage src={ServiceImage04} alt="근태" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                복잡한 연차 촉진 절차, 도입이 꺼려지셨나요? <br />
                자동화로 실무 부담없이 운영해 보세요
              </FeatureTitle>
              <FeatureList
                features={[
                  "연차촉진 대상자 (1년 미만 근로자, 1년 이상 근로자) 조회",
                  "대상자별 연차촉진 시작~마감일 자동 노출",
                  "연차사용계획서 작성 요청 및 작성 현황 조회",
                  "노무수령거부 확인 내역 조회",
                  "관리자 연차사용계획 통보 작성",
                ]}
              />
            </FeatureContent>
            <FeatureImage src={ServiceImage05} alt="근태" />
          </Feature>
        </FeatureSection>
      </FeatureSectionWrapper>
    </ColorProvider>
  );
}
