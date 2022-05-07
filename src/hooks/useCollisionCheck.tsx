import { useRecoilCallback, useSetRecoilState } from "recoil";
import { unitCoordinateState, unitDirectionState } from "../state/atom";
import { gridSpec } from "../constants/field";

export const useCollisionCheck = () => {
  const {
    cellSize,
    step
  } = gridSpec;
  const innerWidth = window.innerWidth;

  const setUnitDirection = useSetRecoilState(unitDirectionState);

  const getImpact = useRecoilCallback(({ snapshot }) => async () => {
    try {

      const coordinate = await snapshot.getPromise(unitCoordinateState);
      const {
        x,
      } = coordinate;
      if (x + cellSize >= innerWidth - step) {
        setUnitDirection(1);
        return true;
      } else if (x <= step) {
        setUnitDirection(0);
        return true;
      }
      return false;

    } catch (e) {
      throw e;
    }
  }, [innerWidth]);

  return {
    getImpact
  }
}