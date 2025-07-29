import Image, { StaticImageData } from "next/image";
import FeatureOragnization from "@/assets/images/main/feature-1.svg";
import FeatureRecruit from "@/assets/images/main/feature-2.svg";
import FeatureAttendance from "@/assets/images/main/feature-3.svg";
import FeatureEvaluation from "@/assets/images/main/feature-4.svg";
import FeatureSalary from "@/assets/images/main/feature-5.svg";
import Inner from "../layout/Inner";
import {
  FeatureButton,
  FeatureButtonDescription,
  FeatureButtonLabel,
  FeatureCard,
  FeatureCategory,
  FeatureContent,
  FeatureDescription,
  FeatureTitle,
} from "./AboutContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./AboutTabs";
import { SectionHeader, SectionLogo, SectionTitle } from "./Section";

type FeatureData = {
  id: string;
  triggerLabel: string;
  trggerDescription: string;
  category: string;
  title: React.ReactNode;
  description: React.ReactNode;
  image: StaticImageData;
  imageAlt: string;
};

const FEATURE_DATA: FeatureData[] = [
  {
    id: "organization",
    triggerLabel: "조직",
    trggerDescription:
      "조직도, 직급, 직책, 호봉(급수) 체계 설정 발령처리, 자산관리까지",
    category: "조직",
    title: (
      <>
        회사정보는 기본, <br />
        우리 회사에 맞는 조직 체계 설정
      </>
    ),
    description: (
      <>
        조직도, 직급, 직책, 호봉(급수) 체계 설정
        <br />
        발령처리, 자산관리까지
      </>
    ),
    image: FeatureOragnization,
    imageAlt: "조직",
  },
  {
    id: "recruit",
    triggerLabel: "인재채용",
    trggerDescription:
      "채용공고 등록/게시, 지원자 현황과 합격자 선발까지 하나의 시스템으로 인재 채용 통합관리",
    category: "인재채용",
    title: (
      <>
        채용부터 합격까지 <br />
        복잡한 채용 절차 간단하게 완성
      </>
    ),
    description: (
      <>
        채용공고 등록/게시, 지원자 현황과 합격자 선발까지 <br />
        하나의 시스템으로 인재 채용 통합관리
      </>
    ),
    image: FeatureRecruit,
    imageAlt: "인재채용",
  },
  {
    id: "attendance",
    triggerLabel: "근태",
    trggerDescription:
      "구성원별 근무 현황 조회 및 각종 근태 신청서 생성을 지원합니다.",
    category: "근태",
    title: (
      <>
        출퇴근은 물론 휴무, 초과근무, <br />
        출장/외근 근태 기록까지
      </>
    ),
    description: "구성원별 근무 현황 조회 및 각종 근태 신청서 생성",
    image: FeatureAttendance,
    imageAlt: "근태",
  },
  {
    id: "evaluation",
    triggerLabel: "평가",
    trggerDescription:
      "평가자/피평가자 설정, 평가등급 기준 설정, 평가문항 프리셋을 제공합니다.",
    category: "종합평가",
    title: (
      <>
        자유로운 평가 설정, 평가 수행-피드백 <br />
        과정으로 체계적인 다면평가 실시
      </>
    ),
    description: (
      <>
        평가자/피평가자 설정, 평가등급 기준 설정, <br />
        평가문항 프리셋 제공
      </>
    ),
    image: FeatureEvaluation,
    imageAlt: "평가",
  },
  {
    id: "salary",
    triggerLabel: "임금설계",
    trggerDescription:
      "재직 중인 구성원 업무 능력 기반 임금설계 시뮬레이션, 연봉계약서 생성을 지원합니다.",
    category: "임금설계",
    title: (
      <>
        쉽지 않은 임금설계, <br />
        시뮬레이션 ~ 연봉계약을 한 번에
      </>
    ),
    description: (
      <>
        재직 중인 구성원 업무 능력 기반 <br />
        임금설계 시뮬레이션, 연봉계약서 생성
      </>
    ),
    image: FeatureSalary,
    imageAlt: "임금설계",
  },
];

export default function About() {
  return (
    <div className="py-30">
      <Inner>
        <SectionHeader className="mb-16 lg:items-start">
          <SectionLogo />
          <SectionTitle className="lg:text-left">
            인재와 기업의 성장을 위한 <br />
            <span className="text-primary">꼭 필요한 기능</span>만 담았습니다
          </SectionTitle>
        </SectionHeader>

        <Tabs defaultValue={FEATURE_DATA[0].id}>
          <TabsList>
            {FEATURE_DATA.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id} asChild>
                <FeatureButton>
                  <FeatureButtonLabel>
                    {feature.triggerLabel}
                  </FeatureButtonLabel>
                  <FeatureButtonDescription>
                    {feature.trggerDescription}
                  </FeatureButtonDescription>
                </FeatureButton>
              </TabsTrigger>
            ))}
          </TabsList>

          <FeatureCard>
            {FEATURE_DATA.map((feature) => (
              <TabsContent key={feature.id} value={feature.id}>
                <FeatureContent>
                  <FeatureCategory>{feature.category}</FeatureCategory>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureContent>
                <Image src={feature.image} alt={feature.imageAlt} />
              </TabsContent>
            ))}
          </FeatureCard>
        </Tabs>
      </Inner>
    </div>
  );
}
