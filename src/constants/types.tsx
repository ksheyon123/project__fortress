import { Direction } from "./enums";

export type DrawerType = {
  name: string;
  icon?: string;
  linkTo: string;
}

export type CoordinateType = {
  x: number;
  y: number;
}

export type ActionType = "normal" | "feed" | "sleep";
