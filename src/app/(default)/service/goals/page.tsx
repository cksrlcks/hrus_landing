import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeatureIcon from "@/assets/images/main/icon-feature-goal.svg";
import ServiceImage01 from "@/assets/images/service/goal/f-1.svg";
import ServiceImage02 from "@/assets/images/service/goal/f-2.svg";
import HeroImage from "@/assets/images/service/goal/hero.svg";
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
  SupportDownload,
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

export default function page() {
  return (
    <ColorProvider color="yellow">
      <ServiceHero>
        <ServiceHeader>
          <ServiceTop>
            <ServiceIcon src={FeatureIcon} alt="목표" />
            <ServiceName>목표</ServiceName>
          </ServiceTop>
          <ServiceTitle>
            조직의 성과를 연결하고,
            <br />한 흐름으로 관리하다
          </ServiceTitle>
          <ServiceFeatures
            data={[
              "연도별 개인/부서/회사 목표 관리",
              "목표별 진척률 트래킹, 이력 히스토리",
              "외부평가 자료 관리",
              "목표 인사이트 (통계)",
            ]}
          />
          <Button size="lg" asChild>
            <Link href="/inquiry">도입문의</Link>
          </Button>
        </ServiceHeader>
        <ServicePreview>
          <Image src={HeroImage} alt="목표-목표 관리" />
        </ServicePreview>
      </ServiceHero>
      <FeatureSectionWrapper>
        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                개인, 부서 목표를 간단하게 생성하고, <br />
                담당자를 지정하여 체계적으로 관리할 수 있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "구성원, 부서, 회사 구분별 목표 생성 및 권한별 조회",
                  "목표별 달성 기간 및 목표 관리 담당자, 달성 멤버 지정",
                  "자유로운 성과 지표 설정",
                  "목표 간 상/하위 관계 설정",
                  "달성률 및 목표 진행상태 관리 및 목표 변동 히스토리 조회",
                ]}
              />
            </FeatureContent>

            <FeatureImage src={ServiceImage01} alt="목표" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature reverse>
            <FeatureContent>
              <FeatureTitle>
                외부에서 받은 KPI 평가자료도 <br />
                쉽게 등록하고 내부 자료처럼 관리할 수 있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "구성원, 부서, 회사 구분별 첨부파일 등록",
                  "사용자별, 일자별 등록 이력 조회",
                ]}
              />
              <FeatureSupport>
                <SupportExcel />
                <SupportDownload />
              </FeatureSupport>
            </FeatureContent>
            <FeatureImage src={ServiceImage02} alt="목표" />
          </Feature>
        </FeatureSection>
      </FeatureSectionWrapper>
    </ColorProvider>
  );
}
