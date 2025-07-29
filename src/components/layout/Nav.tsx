import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItem from "./NavMenuItem";
import { MENUS } from "./constants";

export default function Nav() {
  return (
    <NavigationMenu viewport={false} delayDuration={0}>
      <NavigationMenuList>
        {MENUS.map((menu) => (
          <NavMenuItem key={menu.id} menu={menu} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
