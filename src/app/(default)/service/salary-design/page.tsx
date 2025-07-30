import React from "react";
import Link from "next/link";
import FeatureIcon from "@/assets/images/main/icon-feature-salary.svg";
import ServiceSampleImage from "@/assets/images/service/feature-sample.svg";
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

export default function page() {
  return (
    <ColorProvider color="red">
      <ServiceHero>
        <ServiceHeader>
          <ServiceTop>
            <ServiceIcon src={FeatureIcon} alt="임금설계" />
            <ServiceName>임금설계</ServiceName>
          </ServiceTop>
          <ServiceTitle>
            구성원 성과에 맞춘 공정하고 <br />
            합리적인 임금설계의 시작
          </ServiceTitle>
          <ServiceFeatures
            data={[
              "구성원별 임금 시뮬레이션",
              "시뮬레이션 이력 조회",
              "연봉계약서 생성",
              "임금 인사이트 (통계)",
            ]}
          />
          <Button size="lg" asChild>
            <Link href="/inquiry">도입문의</Link>
          </Button>
        </ServiceHeader>
        <ServicePreview></ServicePreview>
      </ServiceHero>
      <FeatureSectionWrapper>
        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                조직 운영 방식에 따라 <br />
                보상 기준도 그에 맞게 설정해 보세요
              </FeatureTitle>
              <FeatureList
                features={[
                  "기본급, 직위, 직무, 직급 기준 등 조직 운영 구조에 호환되는 임금체계 기준 (인상률) 생성",
                  "최종평가등급에 따른 인상률 기준 설정 \n(종합평가 모듈 사용 시 적용)",
                ]}
              />
            </FeatureContent>

            <FeatureImage src={ServiceSampleImage} alt="준비중" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature reverse>
            <FeatureContent>
              <FeatureTitle>
                복잡한 임금 시뮬레이션 계산, <br />
                이제 시스템이 빠르고 정확하게 처리해드려요
              </FeatureTitle>
              <FeatureList
                features={[
                  "임금 시뮬레이션 개요 생성 (편성예산, 대상자)",
                  "대상자별 보상 기준에 따른 인상률 세팅 및 계산",
                  "자유로운 수치 변경 및 빠른 자동 계산",
                  "기본급 외 기타수당, 차감수당 입력 및 반영",
                ]}
              />
            </FeatureContent>
            <FeatureImage src={ServiceSampleImage} alt="준비중" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                시뮬레이션 결과를 바탕으로
                <br />
                연봉계약서까지 자동으로 똑똑하게 만들어드려요
              </FeatureTitle>
              <FeatureList
                features={[
                  "구성원별 시뮬레이션 수행 결과 조회",
                  "시뮬레이션 결과 바탕의 연봉계약서 자동 생성 및 서명요청 \n(문서/명세서 기능 연계)",
                ]}
              />
            </FeatureContent>
            <FeatureImage src={ServiceSampleImage} alt="준비중" />
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
              <FeatureSupport>
                <SupportExcel />
              </FeatureSupport>
            </FeatureContent>
            <FeatureImage src={ServiceSampleImage} alt="준비중" />
          </Feature>
        </FeatureSection>
      </FeatureSectionWrapper>
    </ColorProvider>
  );
}
