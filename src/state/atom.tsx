import { atom } from "recoil";

type PositionProps = {
  isForward: boolean;
  x: number;
  y: number;
}

type Velocity = {
  velocity: number;
}

const unitPositionState = atom<PositionProps>({
  key: "unitPositionState",
  default: {
    isForward: true,
    x: 0,
    y: 0,
  },
});

const windVelocity = atom<Velocity>({
  key: "windVelocity",
  default: {
    velocity: 0
  }
})

export {
  unitPositionState,
  windVelocity
}