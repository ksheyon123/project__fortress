import { Direction } from "./enums";

export type DrawerType = {
  name: string;
  icon?: string;
  linkTo: string;
}

export type Coordinate = {
  x: number;
  y: number;
}

export type ActionProps = "normal" | "feed" | "sleep";
