import { useRecoilValue, useSetRecoilState, useRecoilState, useRecoilCallback } from "recoil";
import {
  unitCoordinateState
} from "../state/atom";
import {
  PositionProps
} from "../constants/types"
export const useCollisionCheck = () => {

  const getContact = useRecoilCallback(({ snapshot }) => async (willUpdateCoordinate: PositionProps) => {
    const {
      lookingDirection,
      x,
      y
    } = willUpdateCoordinate;
    const ex = 50;
    const ey = 100;
    const r = 10 / 2;
    if (lookingDirection === 0) {
      return (x + 5) === (ex - r);
    }

    if (lookingDirection === 1) {
      return (x - 5) === (ex + r);
    }
    // 아래로
    if (lookingDirection === 3) {
      return (y + 5) === (ey - r);
    }

    if (lookingDirection === 2) {
      return (y - 5) === (ey + r);
    }
  }, []);

  return {
    getContact
  }
}