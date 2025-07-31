export type PlanItem = {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  type: "core" | "addon";
};

export type PricingData = {
  minPersonCount: number;
  maxPersonCount: number;
  core: PlanItem;
  addons: PlanItem[];
};

const MOCK_ADDONS: PlanItem[] = [
  {
    id: "dashboard",
    title: "HR 대시보드",
    description: "구성원 근무·휴무·계약 현황까지 실시간 인사 데이터를 한 눈에",
    features: [
      "업무별 인사이트 데이터 제공",
      "구성원 일일 보고서",
      "다양한 차트 형태 지원",
      "실시간 데이터 동기화",
    ],
    price: 500,
    type: "addon",
  },
  {
    id: "recruit",
    title: "인재채용",
    description: "채용공고 등록부터 합격자 연동까지 모든 채용 절차를 통합 관리",
    features: [
      "공고 개요 및 전형 설정",
      "전용 채용사이트 제공",
      "지원서 정보 조회",
      "합격자 연동 처리",
    ],
    price: 500,
    type: "addon",
  },
  {
    id: "organization",
    title: "조직",
    description: "조직도, 구성원, 자산 정보까지 조직 변화에 따라 유연하게",
    features: [
      "회사/부서 정보 관리",
      "조직 구성 및 개편",
      "인사 발령 처리",
      "자산 및 지출 관리",
    ],
    price: 500,
    type: "addon",
  },
  {
    id: "attendance",
    title: "근태",
    description:
      "초과근무·출장·유연근무·연차까지 구성원별 근무 기준과 현황을 명확하게",
    features: [
      "근무/휴무 기준 설정",
      "근무현황 조회",
      "근태 신청/관리",
      "출장·차량 사용 관리",
      "연차 신청 및 촉진",
    ],
    price: 500,
    type: "addon",
  },
  {
    id: "goals",
    title: "목표",
    description:
      "개인·부서·조직 목표 설정과 성과지표 및 평가자료 이력까지 체계적으로",
    features: [
      "목표 관리",
      "진척률 및 이력 조회",
      "평가 자료 관리",
      "목표 통계 제공",
    ],
    price: 500,
    type: "addon",
  },
  {
    id: "evaluation",
    title: "종합평가",
    description:
      "우리 회사 맞춤 자유로운 평가 설계로 다면·동료·개인평가를 맞춤형 구성",
    features: [
      "평가 설계 및 진행",
      "다단계 평가 지원",
      "1:1 피드백 제공",
      "리뷰 통계 분석",
    ],
    price: 500,
    type: "addon",
  },
  {
    id: "salary-design",
    title: "임금설계",
    description:
      "시뮬레이션 기반 연봉설계부터 계약서 자동 생성까지 한 번에 처리",
    features: ["임금 시뮬레이션", "이력 조회", "계약서 생성", "임금 통계 제공"],
    price: 500,
    type: "addon",
  },
  {
    id: "approval-document",
    title: "전자결재 & 문서관리",
    description:
      "결재 승인라인 설정, 문서 보관, 커스텀 양식 생성까지 기업 맞춤형 문서 완성",
    features: [
      "전자결재 알림",
      "결재 처리",
      "결재라인 설정",
      "문서함/양식 관리",
      "외부 문서 등록",
    ],
    price: 500,
    type: "addon",
  },
];

export const MOCK_DATA: PricingData = {
  minPersonCount: 5,
  maxPersonCount: 100,
  core: {
    id: "core",
    title: "HRUS-Core",
    description:
      "HRUS의 핵심기능으로 기본적인 구성원의 근태관리와 조직관리를 지원합니다.",
    features: [
      "조직관리",
      "근태관리",
      "출/퇴근",
      "유연근무/초과근무",
      "출장/외근",
      "HR 대시보드",
    ],
    price: 6000,
    type: "core",
  },
  addons: MOCK_ADDONS,
};
