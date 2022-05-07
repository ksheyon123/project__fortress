import { atom } from "recoil";
import { CoordinateType, ActionType } from "../constants/types";

const unitCoordinateState = atom<CoordinateType>({
  key: "unitCoordinateState",
  default: {
    x: 0,
    y: 0,
  },
});

// 0 : right. 1 : left
const unitDirectionState = atom<number>({
  key: "unitDirectionState",
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

const interactionState = atom<ActionType>({
  key: "game__interactionState",
  default: "normal"
});

export {
  unitCoordinateState,
  unitDirectionState,
  canvasColorState,
  canvasBrushThicknessState,
  interactionState
}