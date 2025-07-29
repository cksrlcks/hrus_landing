import { StaticImageData } from "next/image";

export type MenuItemStatus =
  | "hot"
  | "active"
  | "upcoming"
  | "disabled"
  | "deprecated";

export type Promotion = {
  title: string;
  image: StaticImageData;
  path: string;
};

export type MenuItem = {
  id: string;
  label: string;
  path?: string;
  description?: string;
  status?: MenuItemStatus;
  children?: MenuItem[];
  promotion?: Promotion | null;
  hideChildren?: boolean;
};

export type ExternalMenuItem = {
  id: string;
  label: string;
  path: string;
  image: StaticImageData;
};

export type Menu = MenuItem[];
