import { Direction } from "./enums";

export type Coordinate = {
  x: number;
  y: number;
}

export type ActionProps = "normal" | "feed" | "sleep";
