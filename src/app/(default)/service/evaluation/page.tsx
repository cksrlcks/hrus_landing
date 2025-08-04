import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FeatureIcon from "@/assets/images/main/icon-feature-eval.svg";
import ServiceImage01 from "@/assets/images/service/evaluation/f-1.svg";
import ServiceImage02 from "@/assets/images/service/evaluation/f-2.svg";
import HeroImage from "@/assets/images/service/evaluation/hero.svg";
import { ColorProvider } from "@/components/service/ColorProvider";
import {
  Feature,
  FeatureImage,
  FeatureSection,
  FeatureContent,
  FeatureList,
  FeatureTitle,
  FeatureSectionWrapper,
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
  title: "성과를 정량화하고, 공정하게 평가하는 종합평가 | HRUS",
  description:
    "중소기업을 위한 인사경영혁신 솔루션, 함께 성장하고 나아가는 조직을 만듭니다.",
};

export default function page() {
  return (
    <ColorProvider color="green">
      <ServiceHero>
        <ServiceHeader>
          <ServiceTop>
            <ServiceIcon src={FeatureIcon} alt="종합평가" />
            <ServiceName>종합평가</ServiceName>
          </ServiceTop>
          <ServiceTitle>
            성과를 정량화하고,
            <br />
            공정하게 평가하는 종합평가
          </ServiceTitle>
          <ServiceFeatures
            data={[
              "자유로운 평가 개요 생성, 관리",
              "1~3차 평가 진행",
              "개인별 1:1 피드백",
              "리뷰 인사이트 (통계)",
            ]}
          />
          <Button size="lg" asChild>
            <Link href="/inquiry">도입문의</Link>
          </Button>
        </ServiceHeader>
        <ServicePreview>
          <Image
            src={HeroImage}
            alt="종합평가-종합평가 관리"
            className="lg:-ml-15"
          />
        </ServicePreview>
      </ServiceHero>
      <FeatureSectionWrapper>
        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                조직마다 다른 평가 방식, <br />
                우리 조직에 꼭 맞는 평가 체계를 세울 수 있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "평가 기초설정 (평가 차수, 문항, 피/평가자, 평가기간)",
                  "평가 프리셋 제공 (신입사원, 경력사원 등)",
                  "평가별 등급 부여 기준 설정 (절대, 상대, 등급부여)",
                  "평가 결과 기반 구성원별 최종평가등급 기준설정 및 자동 집계",
                ]}
              />
            </FeatureContent>

            <FeatureImage src={ServiceImage01} alt="종합평가" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature reverse>
            <FeatureContent>
              <FeatureTitle>
                평가자와 피평가자가 평가 결과를 바탕으로 <br />
                피드백을 주고받을 수 있는 소통 환경을 제공해요
              </FeatureTitle>
              <FeatureList
                features={[
                  "평가 개요별 평가자 – 피평가자 간 대화방식의 1:1 피드백",
                  "실시간 평가 결과 정정",
                  "평가별 피드백 이력 조회",
                ]}
              />
            </FeatureContent>
            <FeatureImage src={ServiceImage02} alt="종합평가" />
          </Feature>
        </FeatureSection>
      </FeatureSectionWrapper>
    </ColorProvider>
  );
}
