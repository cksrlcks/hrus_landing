import { cn } from "@/lib/utils";
import MenuChildItem from "./MenuChildItem";
import Promotion from "./Promotion";
import { MenuItem } from "./type";

type MenuDropdownProps = {
  menu: MenuItem;
};

export default function MenuDropdown({ menu }: MenuDropdownProps) {
  if (!menu.children) return null;

  return (
    <div className="flex gap-5">
      <ul
        className={cn(
          "grid w-[500px] grid-cols-2 gap-x-2",
          menu.promotion && "flex w-[300px] flex-col gap-0",
        )}
      >
        {menu.children.map((child) => (
          <MenuChildItem
            key={child.id}
            child={child}
            className={cn(menu.id === "service" && "nth-last-[2]:border-0")}
          />
        ))}
      </ul>
      <Promotion promotion={menu.promotion} />
    </div>
  );
}
