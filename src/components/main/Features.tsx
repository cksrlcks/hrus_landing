import Image, { StaticImageData } from "next/image";
import FeatureIconAttendance from "@/assets/images/main/icon-feature-attendance.svg";
import FeatureIconCheck from "@/assets/images/main/icon-feature-check.svg";
import FeatureIconDashboard from "@/assets/images/main/icon-feature-dashboard.svg";
import FeatureIconDocs from "@/assets/images/main/icon-feature-docs.svg";
import FeautreIconEval from "@/assets/images/main/icon-feature-eval.svg";
import FeatureIconGoal from "@/assets/images/main/icon-feature-goal.svg";
import FeatureIconOrganization from "@/assets/images/main/icon-feature-organization.svg";
import FeatureIconRecruit from "@/assets/images/main/icon-feature-recruit.svg";
import FeatureIconSalary from "@/assets/images/main/icon-feature-salary.svg";
import Inner from "../layout/Inner";
import FadeInUp from "../ui/FadeInUp";
import {
  SectionDescription,
  SectionHeader,
  SectionLogo,
  SectionTitle,
} from "./Section";

type FeatureData = {
  title: string;
  description: string;
  icon: StaticImageData;
  status?: "active" | "upcoming" | "deprecated";
  supportExcel?: boolean;
};
const FEATURE_DATA: FeatureData[] = [
  {
    title: "대시보드",
    description: "조직/근태/업무일지/목표/채용 업무별 현황 차트 한눈에",
    icon: FeatureIconDashboard,
    supportExcel: true,
  },
  {
    title: "인재 채용",
    description: "채용공고 게시부터 지원자 합격자 추적관리, 인사정보 연계까지",
    icon: FeatureIconRecruit,
  },
  {
    title: "조직 관리",
    description:
      "회사 기본정보, 조직도/구성원 관리, 우리 회사 소중한 자산관리도 함께",
    icon: FeatureIconOrganization,
  },

  {
    title: "근태 관리",
    description: "구성원별 근무/휴무 기준 설정, 구성원 근무 현황 한번에",
    icon: FeatureIconAttendance,
  },
  {
    title: "목표 관리",
    description:
      "구성원/부서/회사별 목표 설정과 진척률 트래킹, 외부 컨설팅 자료까지 등록, 관리",
    icon: FeatureIconGoal,
  },
  {
    title: "종합 평가",
    description:
      "평가별 (피)평가자, 문항, 차수, 평가 등급 산정 기준을 원하는대로 커스텀, 1:1 피드백 진행",
    icon: FeautreIconEval,
    status: "upcoming",
  },
  {
    title: "임금설계",
    description:
      "어려운 임금 산정은 그만, 구성원별 인사 데이터 기반 시뮬레이션 진행",
    icon: FeatureIconSalary,
    status: "upcoming",
  },
  {
    title: "전자결재",
    description: "결재 On/Off 설정, 쉽고 빠른 결재자 승인, 반려처리",
    icon: FeatureIconCheck,
    status: "upcoming",
  },
  {
    title: "문서양식 관리",
    description:
      "우리 회사만의 신청서, 결재 양식 생성/관리, 기본 제공되는 20개 이상의 문서 양식",
    icon: FeatureIconDocs,
  },
];
export default function Features() {
  return (
    <div className="flex items-center justify-center bg-[#f9f9f9] py-15 lg:py-30">
      <Inner>
        <FadeInUp>
          <SectionHeader className="mb-15">
            <SectionLogo />
            <SectionTitle>
              효율적인 인재 관리를 위한 <br />
              똑똑한 기능
            </SectionTitle>
            <SectionDescription className="mt-10">
              HR US는 업무일지, 캘린더, 상벌 관리, 승진 관리 등 기본적인 기능은
              물론 <br className="hidden lg:block" />
              인사 관리에 필요한 다양한 기능을 제공하여 효율적인 업무를
              지원합니다
            </SectionDescription>
          </SectionHeader>
        </FadeInUp>
        <FadeInUp>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-4">
            {FEATURE_DATA.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start rounded-sm bg-white px-10 py-11 leading-normal tracking-tight lg:min-h-[300px] lg:rounded-2xl"
              >
                <div className="mb-6 flex h-6 items-center justify-start lg:h-8">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="h-full w-auto lg:h-auto"
                  />
                </div>
                <h3 className="mb-2 font-semibold lg:mb-4 lg:text-xl">
                  {feature.title}
                </h3>
                <div className="text-sm text-[#888] lg:w-[80%] lg:text-base">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>
      </Inner>
    </div>
  );
}
