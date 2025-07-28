import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const MENUS = [
  {
    id: "service",
    label: "서비스 소개",
    path: "/service",
    children: [
      {
        id: "dashboard",
        label: "대시보드",
        path: "/service/dashboard",
      },
      {
        id: "recruit",
        label: "인재채용",
        path: "/service/recruit",
      },
      {
        id: "organization",
        label: "조직",
        path: "/service/organization",
      },
      {
        id: "attendance",
        label: "근태",
        path: "/service/attendance",
      },
      {
        id: "goals",
        label: "목표",
        path: "/service/goals",
      },
      {
        id: "salary-design",
        label: "임금설계",
        path: "/service/salary-design",
      },
      {
        id: "approval-document",
        label: "전자결제&문서관리",
        path: "/service/approval-document",
      },
    ],
  },
  {
    id: "pricing",
    label: "구독 요금",
    path: "/pricing",
  },
  {
    id: "support",
    label: "고객지원",
    path: "/support",
    children: [
      {
        id: "inquiry",
        label: "1:1 문의",
        path: "/support/inquiry",
      },
      {
        id: "solution",
        label: "서비스 소개서",
        path: "/support/solution",
      },
    ],
  },
];

export default function Nav() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {MENUS.map((menu) => (
          <NavigationMenuItem key={menu.id}>
            {menu.children ? (
              <>
                <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] grid-cols-2 gap-2">
                    {menu.children.map((child) => (
                      <li key={child.id}>
                        <NavigationMenuLink
                          href={child.path}
                          className="whitespace-nowrap"
                        >
                          {child.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink href={menu.path}>
                {menu.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
