import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { MenuItem, MenuItemStatus } from "./type";

type MenuChildItemProps = {
  child: MenuItem;
  className?: string;
};

const statusClassMap: Record<MenuItemStatus, string> = {
  hot: "bg-red-100 text-red-600",
  active: "bg-green-100 text-green-600",
  upcoming: "bg-emerald-100 text-emerald-600",
  disabled: "bg-gray-200 text-gray-500",
  deprecated: "bg-gray-300 text-gray-600",
};

const statusLabelMap = {
  hot: "인기",
  active: "사용 중",
  upcoming: "도입예정",
  disabled: "비활성화",
  deprecated: "지원중단",
};

export default function MenuChildItem({
  child,
  className,
}: MenuChildItemProps) {
  return (
    <li
      className={cn(
        "mb-1.5 border-b border-gray-100 pb-1.5 last:mb-0 last:border-0 last:pb-0",
        className,
      )}
    >
      <NavigationMenuLink asChild>
        <Link href={child.path || "#"} className="block">
          <span className="flex items-center gap-2">
            {child.label}
            {child.status && (
              <span
                className={cn(
                  "text-muted-foreground origin-left-center scale-95 rounded px-1 py-1 text-xs",
                  statusClassMap[child.status],
                )}
              >
                {statusLabelMap[child.status]}
              </span>
            )}
          </span>
          {child.description && (
            <div className="text-muted-foreground text-sm font-normal">
              {child.description}
            </div>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
