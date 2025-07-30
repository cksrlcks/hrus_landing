import Link from "next/link";
import { blurFocus } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import MenuDropdown from "./MenuDropdown";
import { MenuItem } from "./type";

type NavMenuItemProps = {
  menu: MenuItem;
};

export default function NavMenuItem({ menu }: NavMenuItemProps) {
  return (
    <NavigationMenuItem>
      {menu.children && !menu.hideChildren ? (
        <>
          <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MenuDropdown menu={menu} />
          </NavigationMenuContent>
        </>
      ) : (
        <NavigationMenuLink asChild>
          <Link href={menu.path || "#"} onClick={() => blurFocus()}>
            {menu.label}
          </Link>
        </NavigationMenuLink>
      )}
    </NavigationMenuItem>
  );
}
