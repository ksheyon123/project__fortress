import { atom } from "recoil";
import { PositionProps } from "../constants/types";
// 0 right, 1 left, 2 up, 3 bottom
const unitCoordinateState = atom<PositionProps>({
  key: "unitCoordinateState",
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
});

export {
  unitCoordinateState,
  canvasColorState,
  canvasBrushThicknessState
}