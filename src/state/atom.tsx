import { atom } from "recoil";

type PositionProps = {
  isForward: boolean;
  x: number;
  y: number;
}

const unitPositionState = atom<PositionProps>({
  key: "unitPositionState",
  default: {
    isForward: true,
    x: 100,
    y: 240,
  },
});

const windVelocityState = atom<number>({
  key: "windVelocityState",
  default: 0
});

const shootingDegreeState = atom<number>({
  key: "shootingDegreeState",
  default: 45
})

export {
  unitPositionState,
  windVelocityState,
  shootingDegreeState
}