import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FeatureIcon from "@/assets/images/main/icon-feature-dashboard.svg";
import ServiceImage01 from "@/assets/images/service/dashboard/f-1.svg";
import ServiceImage02 from "@/assets/images/service/dashboard/f-2.svg";
import ServiceImage03 from "@/assets/images/service/dashboard/f-3.svg";
import HeroImage from "@/assets/images/service/dashboard/hero.svg";
import { ColorProvider } from "@/components/service/ColorProvider";
import {
  Feature,
  FeatureImage,
  FeatureSection,
  FeatureContent,
  FeatureList,
  FeatureTitle,
  FeatureSupport,
  SupportExcel,
  SupportPrint,
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
  title: "흩어져있는 구성원 데이터, 대시보드에서 한 번에 확인! | HRUS",
  description:
    "중소기업을 위한 인사경영혁신 솔루션, 함께 성장하고 나아가는 조직을 만듭니다.",
};

export default function page() {
  return (
    <ColorProvider color="green">
      <ServiceHero>
        <ServiceHeader>
          <ServiceTop>
            <ServiceIcon src={FeatureIcon} alt="대시보드" />
            <ServiceName>대시보드</ServiceName>
          </ServiceTop>
          <ServiceTitle>
            흩어져있는 구성원 데이터,
            <br />
            대시보드에서 한 번에 확인!
          </ServiceTitle>
          <ServiceFeatures
            data={[
              "조직/근태/업무일지/목표/채용 업무별 인사이트 데이터 조회",
              "회사 구성원 개인별 일일 보고서 제공",
              "원형, 막대형, 꺾은선 등 항목별 적합한 차트 형태 지원",
              "월별, 일별 실시간 데이터 동기화",
            ]}
          />
          <Button size="lg" asChild>
            <Link href="/inquiry">도입문의</Link>
          </Button>
        </ServiceHeader>
        <ServicePreview>
          <Image src={HeroImage} alt="대시보드" />
        </ServicePreview>
      </ServiceHero>
      <FeatureSectionWrapper>
        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                인사 업무마다 쌓이는 데이터,
                <br />꼭 필요한 정보만 골라 보기 쉽게 정리해드려요
              </FeatureTitle>
              <FeatureList
                features={[
                  "총인력, 입/퇴사자, 구성원 성별, 나이, 직급, 고용형태, 학력, 직원유형, 근무유형, 근속연수 현황",
                  "일일 출/퇴근, 근무시간, 전직원 근무상태 (근무/휴무)현황, 월별 근무/근태 현황",
                  "일일 구성원 업무일지 작성 현황 조회",
                  "구성원, 부서, 회사별 목표 생성 및 진척률 조회",
                  "공고별, 채용 기간별 지원자, 합격자 현황",
                ]}
              />
            </FeatureContent>

            <FeatureImage src={ServiceImage01} alt="대시보드 기능" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature reverse>
            <FeatureContent>
              <FeatureTitle>
                재직 중인 구성원의 업무 흐름,
                <br />
                시작부터 종료까지 한 눈에 확인할 수 있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "매일 실시간으로 갱신되는 구성원 데이터 조회",
                  "출/퇴근 이력, 초과근무 정보 조회",
                  "부여된 연차/휴가 및 최근 사용 정보",
                  "작성한 업무일지 조회",
                  "오늘 생성 및 관리한 목표 조회",
                ]}
              />
              <FeatureSupport>
                <SupportExcel />
              </FeatureSupport>
            </FeatureContent>
            <FeatureImage
              src={ServiceImage02}
              alt="근무기록, 근무시간, 초과근무"
            />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                하루동안의 구성원 인사 데이터를
                <br />
                정리해주는 일일 스마트 리포트를 제공해요
              </FeatureTitle>
              <FeatureList
                features={[
                  "구성원 기본정보 변동내역 실시간 조회",
                  "근태정보 (근무시간, 출/퇴근시간, 초과근무시간) 조회",
                  "연차/휴가정보 조회",
                  "업무일지 작성내역 조회",
                  "목표 생성/관리내역 조회",
                ]}
              />
              <FeatureSupport>
                <SupportExcel />
                <SupportPrint />
              </FeatureSupport>
            </FeatureContent>
            <FeatureImage src={ServiceImage03} alt="구성원 일일보고서" />
          </Feature>
        </FeatureSection>
      </FeatureSectionWrapper>
    </ColorProvider>
  );
}
