import FamilyBetteronImage from "@/assets/images/family-betteron.svg";
import FamilyBlogImage from "@/assets/images/family-blog.svg";
import FamilyUXISImage from "@/assets/images/family-uxis.svg";
import PromotionImage from "@/assets/images/menu-bg.svg";
import { ExternalMenuItem, Menu } from "./type";

export const MENUS: Menu = [
  {
    id: "service",
    label: "서비스 소개",
    children: [
      {
        id: "dashboard",
        label: "HR 대시보드",
        path: "/service/dashboard",
        description:
          "구성원 근무·휴무·계약 현황까지 실시간 인사 데이터를 한 눈에",
      },
      {
        id: "recruit",
        label: "인재채용",
        path: "/service/recruit",
        description:
          "채용공고 등록부터 합격자 연동까지 모든 채용 절차를 통합 관리",
      },
      {
        id: "organization",
        label: "조직",
        path: "/service/organization",
        description: "조직도, 구성원, 자산 정보까지 조직 변화에 따라 유연하게",
      },
      {
        id: "attendance",
        label: "근태",
        path: "/service/attendance",
        description:
          "초과근무·출장·유연근무·연차까지 구성원별 근무 기준과 현황을 명확하게",
      },
      {
        id: "goals",
        label: "목표",
        path: "/service/goals",
        description:
          "개인·부서·조직 목표 설정과 성과지표 및 평가자료 이력까지 체계적으로",
      },
      {
        id: "evaluation",
        label: "종합평가",
        path: "/service/evaluation",
        status: "upcoming",
        description:
          "우리 회사 맞춤 자유로운 평가 설계로 다면·동료·개인평가를 맞춤형 구성",
      },
      {
        id: "salary-design",
        label: "임금설계",
        path: "/service/salary-design",
        description:
          "시뮬레이션 기반 연봉설계부터 계약서 자동 생성까지 한 번에 처리",
        status: "upcoming",
      },
      {
        id: "approval-document",
        label: "전자결재 & 문서관리",
        path: "/service/docs",
        description:
          "결재 승인라인 설정, 문서 보관, 커스텀 양식 생성까지 기업 맞춤형 문서 완성",
        status: "upcoming",
      },
    ],
  },
  {
    id: "pricing",
    label: "구독 요금",
    path: "/pricing",
    hideChildren: true,
    children: [
      {
        id: "pricing",
        label: "요금 안내",
        path: "/pricing",
      },
    ],
  },
  {
    id: "support",
    label: "고객지원",
    promotion: {
      title: "원하는 기능만 골라서 지금 시작해보세요",
      image: PromotionImage,
      path: "/pricing",
    },
    children: [
      {
        id: "inquiry",
        label: "1:1 문의",
        path: "/inquiry",
        description: "도입관련 문의를 하실 수 있습니다.",
      },
      {
        id: "solution",
        label: "서비스 소개서",
        path: "/solution",
        description: "HR US 솔루션에 대해 궁금하신가요?",
      },
      {
        id: "terms",
        label: "서비스 이용약관",
        path: "/terms",
      },
      {
        id: "privacy",
        label: "개인정보처리방침",
        path: "/privacy",
      },
    ],
  },
];

export const COMPANY_INFO = {
  company_name: "주식회사 유시스",
  info: [
    {
      label: "대표이사",
      value: "박종덕",
    },
    {
      label: "본사",
      value: "부산광역시 해운대구 센텀북대로60, 1006~1007",
    },
    {
      label: "지사",
      value: "서울 마포구 매봉산로 31, S-PLEX CENTER 11층 IT공방",
    },
    {
      label: "대표번호/팩스",
      value: "1544-8156 / 1544-8156 (FAX)",
    },
    {
      label: "사업자등록번호",
      value: "617-81-60090",
    },
    {
      label: "이메일",
      value: "uxis@uxis.co.kr",
    },
  ],
};

export const FAMILY_SITE: ExternalMenuItem[] = [
  {
    id: "uxis",
    label: "유시스",
    path: "https://www.uxis.co.kr",
    image: FamilyUXISImage,
  },
  {
    id: "betteron",
    label: "베러온",
    path: "http://betteron.co.kr/",
    image: FamilyBetteronImage,
  },
  {
    id: "blog",
    label: "블로그",
    path: "https://blog.naver.com/arias419",
    image: FamilyBlogImage,
  },
];
