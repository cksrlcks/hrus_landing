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
        description: "HRUS의 모든 기능을 한눈에 확인할 수 있습니다.",
      },
      {
        id: "recruit",
        label: "인재채용",
        path: "/service/recruit",
        description: "인재를 효율적으로 채용할 수 있는 솔루션입니다.",
      },
      {
        id: "organization",
        label: "조직",
        path: "/service/organization",
        description: "조직도를 시각적으로 관리할 수 있습니다.",
      },
      {
        id: "attendance",
        label: "근태",
        path: "/service/attendance",
        description: "근태를 효율적으로 관리할 수 있는 솔루션입니다.",
      },
      {
        id: "goals",
        label: "목표",
        path: "/service/goals",
        description: "조직과 개인의 목표를 관리할 수 있습니다.",
      },
      {
        id: "evaluation",
        label: "종합평가",
        path: "/service/evaluation",
        description: "종합평가를 효율적으로 관리할 수 있는 솔루션입니다.",
      },
      {
        id: "salary-design",
        label: "임금설계",
        path: "/service/salary-design",
        description: "임금설계를 효율적으로 관리할 수 있는 솔루션입니다.",
        status: "upcoming",
      },
      {
        id: "approval-document",
        label: "전자결제&문서관리",
        path: "/service/approval-document",
        description:
          "전자결제와 문서를 효율적으로 관리할 수 있는 솔루션입니다.",
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
