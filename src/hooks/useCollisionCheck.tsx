import { useRecoilValue, useSetRecoilState, useRecoilState, useRecoilCallback } from "recoil";
import {
  unitCoordinateState
} from "../state/atom";
import {
  Coordinate
} from "../constants/types"
export const useCollisionCheck = () => {

  const getContact = useRecoilCallback(({ snapshot }) => async (willUpdateCoordinate: Coordinate) => {
    const {
      x,
      y
    } = willUpdateCoordinate;
    const ex = 50;
    const ey = 100;
    const r = 10 / 2;
  }, []);

  return {
    getContact
  }
}