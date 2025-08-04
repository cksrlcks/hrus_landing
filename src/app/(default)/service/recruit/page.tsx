import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeatureIcon from "@/assets/images/main/icon-feature-recruit.svg";
import ServiceImage01 from "@/assets/images/service/recruit/f-1.svg";
import ServiceImage02 from "@/assets/images/service/recruit/f-2.svg";
import ServiceImage03 from "@/assets/images/service/recruit/f-3.svg";
import ServiceImage04 from "@/assets/images/service/recruit/f-4.svg";
import HeroImage from "@/assets/images/service/recruit/hero.svg";
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

export default function page() {
  return (
    <ColorProvider color="blue">
      <ServiceHero>
        <ServiceHeader>
          <ServiceTop>
            <ServiceIcon src={FeatureIcon} alt="인재채용" />
            <ServiceName>인재채용</ServiceName>
          </ServiceTop>
          <ServiceTitle>
            우리가 원하는 인재를,
            <br />
            우리가 원하는 방식으로
          </ServiceTitle>
          <ServiceFeatures
            data={[
              "채용공고별 기본 개요, 채용 전형, 자기소개서 항목 설정",
              "우리 회사만의 채용공고 사이트 운영",
              "공고별 지원서 정보 조회",
              "합격자 일괄 통보 및 인사 정보 연계",
            ]}
          />
          <Button size="lg" asChild>
            <Link href="/inquiry">도입문의</Link>
          </Button>
        </ServiceHeader>
        <ServicePreview>
          <Image src={HeroImage} alt="인재채용-채용사이트 지원" />
        </ServicePreview>
      </ServiceHero>
      <FeatureSectionWrapper>
        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                우리 회사가 원하는 인재상에 맞춰 <br />
                채용공고부터 지원서까지 <br />
                자유롭게 구성할 수 있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "모집기간, 모집 경력, 직군/직무, 상세 내용 등 기본 개요 설정",
                  "희망하는 전형 단계 구성 (서류, 필기, 1~3 차수별 면접)",
                  "개요별 자기소개서 항목, 첨부파일 항목 추가/관리",
                ]}
              />
            </FeatureContent>

            <FeatureImage src={ServiceImage01} alt="채용공고 등록" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature reverse>
            <FeatureContent>
              <FeatureTitle>
                이제 채용공고, 여기저기 올리지 마세요 <br />
                우리 회사만의 채용 사이트로 <br />한 번에 해결하세요!
              </FeatureTitle>
              <FeatureList
                features={[
                  "등록된 채용공고 기반 공고 목록 노출",
                  "공고별 지원서 작성, 제출 지원",
                  "채용 사이트 디자인 커스텀 지원 (지원예정)",
                ]}
              />
            </FeatureContent>
            <FeatureImage src={ServiceImage02} alt="기업별 채용사이트 제공" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                공고별 지원자 서류를 빠르게 조회하고, <br />
                결과는 일괄로 스마트하게 지정할 수 있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "공고별 지원자 및 입사지원서 조회 & 관리",
                  "지원자 전형 단계별 일괄 합격/불합격 처리",
                  "합격, 불합격 대상자 일괄 통보 (SMS, 메일)",
                ]}
              />
            </FeatureContent>
            <FeatureImage src={ServiceImage03} alt="공고별 지원자 관리" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature reverse>
            <FeatureContent>
              <FeatureTitle>
                합격자 정보를 그대로 연동해 조직 배치부터
                <br />
                근로·연봉 계약까지 따로 입력하지 않아도 돼요
              </FeatureTitle>
              <FeatureList
                features={[
                  "합격자 기준 근로/연봉 계약 정보 및 계약서 등록",
                  "조직 내 구성원 추가 시 합격자 정보 연동하여 별도의 추가 입력 없이 기본 정보 등록",
                ]}
              />
            </FeatureContent>
            <FeatureImage src={ServiceImage04} alt="합격자 관리" />
          </Feature>
        </FeatureSection>
      </FeatureSectionWrapper>
    </ColorProvider>
  );
}
