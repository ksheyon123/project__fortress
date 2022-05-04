import { atom } from "recoil";
import { Coordinate, ActionProps } from "../constants/types";
// 0 right, 1 left, 2 up, 3 bottom
const unitCoordinateState = atom<Coordinate>({
  key: "unitCoordinateState",
  default: {
    x: 0,
    y: 0,
  },
});

// 0 : right. 1 : left
const unitDirectionState = atom<number>({
  key: "unitCoordinateState",
  default: 0
})

const canvasColorState = atom<string>({
  key: "canvasColorState",
  default: "#FFFFFF",
});

const canvasBrushThicknessState = atom<string>({
  key: "canvasBrushThicknessState",
  default: "1px",
});

const interactionState = atom<ActionProps>({
  key: "game__interactionState",
  default: "normal"
});

export {
  unitCoordinateState,
  canvasColorState,
  canvasBrushThicknessState,
  interactionState
}