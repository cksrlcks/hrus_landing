import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeatureIcon from "@/assets/images/main/icon-feature-organization.svg";
import ServiceImage01 from "@/assets/images/service/organization/f-1.svg";
import ServiceImage02 from "@/assets/images/service/organization/f-2.svg";
import ServiceImage03 from "@/assets/images/service/organization/f-3.svg";
import ServiceImage04 from "@/assets/images/service/organization/f-4.svg";
import HeroImage from "@/assets/images/service/organization/hero.svg";
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
            <ServiceIcon src={FeatureIcon} alt="조직" />
            <ServiceName>조직</ServiceName>
          </ServiceTop>
          <ServiceTitle>
            변화하는 조직, 바뀌는 체계를 <br />
            정확하게 반영하는 조직관리
          </ServiceTitle>
          <ServiceFeatures
            data={[
              "회사 기본정보 등록/관리",
              "운용중인 부서 등록, 조직도 구성, 조직 개편 완벽 대응",
              "발령 예약/등록",
              "회사 자산관리, 지출 결의/품의 신청",
            ]}
          />
          <Button size="lg" asChild>
            <Link href="/inquiry">도입문의</Link>
          </Button>
        </ServiceHeader>
        <ServicePreview>
          <Image src={HeroImage} alt="조직-조직도관리" />
        </ServicePreview>
      </ServiceHero>
      <FeatureSectionWrapper>
        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                회사 기본정보와 직인은 기본, <br />
                우리 회사만의 휴일과 복지까지 <br />
                함께 관리해 보세요
              </FeatureTitle>
              <FeatureList
                features={[
                  "설립일, 업태, 운영시간, 주소, 대표번호를 비롯한 회사개요 등록",
                  "지정된 대표, 담당자별 업무별 관리자 확인 알림 제공",
                  "국가 공휴일 자동 반영, 사내 개별 휴일 지정 및 관리",
                  "사내 운용 중인 복지 내역 관리 (채용 연계예정)",
                ]}
              />
            </FeatureContent>

            <FeatureImage src={ServiceImage01} alt="회사기본정보" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature reverse>
            <FeatureContent>
              <FeatureTitle>
                조직도 기반으로 부서를 관리하고, <br />
                내일의 조직 변화까지 유연하게 <br />
                반영할 수 있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "조직도 및 부서 생성/관리",
                  "조직 개편 시 기준일자에 맞춰 자동으로 변경사항 반영",
                  "우리 회사만의 직급, 직책, 직군/직무, 호봉 체계 설정/관리",
                ]}
              />
            </FeatureContent>
            <FeatureImage src={ServiceImage02} alt="직무직군 관리" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature>
            <FeatureContent>
              <FeatureTitle>
                우리 회사 구성원 관리는 간편하게, <br />
                인사 정보는 구성원별로 깔끔하게 <br />
                확인할 수 있어요.
              </FeatureTitle>
              <FeatureList
                features={[
                  "역대 구성원 (입사자 / 퇴사자) 일괄 조회",
                  "구성원별 인사프로필 조회, 관리 \n(해당하는 모듈 사용 시 조회 가능)",
                  "구성원 정보 변경 시 자동 발령 연계",
                  "구성원 개인별 인사프로필 출력 폼 제공",
                  "회사 그룹 초대링크 생성, 관리 및 그룹 가입 승인/거절처리",
                ]}
              />
            </FeatureContent>
            <FeatureImage src={ServiceImage03} alt="인사프로필" />
          </Feature>
        </FeatureSection>

        <FeatureSection>
          <Feature reverse>
            <FeatureContent>
              <FeatureTitle>
                우리 회사의 자산부터 구매·지출까지,
                <br />
                하나의 흐름으로 쉽게 관리해 보세요
              </FeatureTitle>
              <FeatureList
                features={[
                  "회사 자산 등록/관리",
                  "자산별 사용자 등록 및 사용자 현황 보기",
                  "구매/지출결의 신청 및 신청내역 조회",
                ]}
              />
              <FeatureSupport>
                <SupportExcel />
              </FeatureSupport>
            </FeatureContent>
            <FeatureImage src={ServiceImage04} alt="자산현황" />
          </Feature>
        </FeatureSection>
      </FeatureSectionWrapper>
    </ColorProvider>
  );
}
