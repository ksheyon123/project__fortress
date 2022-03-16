import { atom } from "recoil";

enum Direction {
  Right = 0,
  Left = 1,
  Up = 2,
  Down = 3
}

type PositionProps = {
  lookingDirection: Direction;
  x: number;
  y: number;
}

const unitLocationState = atom<PositionProps>({
  key: "unitLocationState",
  default: {
    lookingDirection: 0,
    x: 0,
    y: 0,
  },
});

const canvasColorState = atom<string>({
  key: "canvasColorState",
  default: "#FFFFFF",
});

const canvasBrushThicknessState = atom<string>({
  key: "canvasBrushThicknessState",
  default: "1px",
})

export {
  unitLocationState,
  canvasColorState,
  canvasBrushThicknessState
}