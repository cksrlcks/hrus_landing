import React from "react";
import Link from "next/link";
import FeatureIcon from "@/assets/images/main/icon-feature-docs.svg";
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
            <ServiceIcon src={FeatureIcon} alt="결재/문서" />
            <ServiceName>전자결재 & 문서관리</ServiceName>
          </ServiceTop>
          <ServiceTitle>
            신청부터 승인, 양식까지
            <br />
            조직의 문서흐름을 자동화하다
          </ServiceTitle>
          <ServiceFeatures
            data={[
              "실시간 전자결재 현황 알림",
              "쉽고 빠른 결재자 승인/반려",
              "업무별 사전 결재라인 지정",
              "메뉴별 전자결재 On/Off",
              "개인별/회사 문서함 구분 및 업무별 문서 양식 관리",
              "외부 문서 파일 등록 지원",
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
                결재는 꼭 필요한 업무에만, <br /> 승인 흐름은 자유롭게 구성할 수
                있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "업무별 전자결재 On/Off 기능 \n(전자결재 모듈 사용 시 적용)",
                  "전자결재 승인 라인 프리셋 생성 기능 지원",
                  "전자결재 요청 시 승인자 알림 발송",
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
                요청부터 승인대기, 회수까지
                <br />
                문서 상태별로 깔끔하게 관리할 수 있어요.
              </FeatureTitle>
              <FeatureList
                features={[
                  "사용자가 요청한 전자결재 문서 조회 및 회수처리",
                  "사용자가 승인해야 하는 문서 조회 및 승인/반려 처리",
                  "회수 문서함 내 재기안 기능 지원",
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
                즉시 쓸 수 있는 기본 양식부터 <br />
                커스텀 문서까지, 필요한 문서를 빠르게 완성해보세요
              </FeatureTitle>
              <FeatureList
                features={[
                  "각종 근태 신청서를 비롯한 결재 양식 및 신청서 22종 기본 제공",
                  "회사별 커스텀 문서 양식 생성 및 관리 기능 지원",
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
                개인 문서와 조직 문서를 구분해 <br />
                깔끔하게 분류하고 관리할 수 있어요
              </FeatureTitle>
              <FeatureList
                features={[
                  "구성원 & 회사 문서함 개별 제공",
                  "자유로운 문서함 구분 설정",
                  "문서함 업무 담당자 지정",
                  "솔루션 내 발생한 문서 외 외부 문서 등록 기능 지원",
                ]}
              />
            </FeatureContent>
            <FeatureImage src={ServiceSampleImage} alt="준비중" />
          </Feature>
        </FeatureSection>
      </FeatureSectionWrapper>
    </ColorProvider>
  );
}
