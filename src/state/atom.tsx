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
    x: 100,
    y: 240,
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