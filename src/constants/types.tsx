import { Direction } from "./enums";

export type PositionProps = {
  lookingDirection: Direction;
  x: number;
  y: number;
}

export type ActionProps = "normal" | "feed" | "sleep";
