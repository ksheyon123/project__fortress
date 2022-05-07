import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  useRecoilValue,
  useSetRecoilState,
  useRecoilCallback
} from "recoil";
import {
  unitCoordinateState,
  unitDirectionState,
  interactionState
} from '../../state/atom';
import {
  useCollisionCheck
} from "../../hooks/useCollisionCheck";
import {
  gridSpec
} from "../../constants/field";
import { theme } from "../../styles/theme";

const StyledController = styled.div`
  width : 100vw;
  /* height : ${theme.controllerHeight}; */
  background-color: ${theme.background};
  border-top: 1px solid ${theme.pixel};
`;

const Controller: React.FC = () => {
  const setCoordinate = useSetRecoilState(unitCoordinateState);
  const interaction = useRecoilValue(interactionState);
  const { getImpact } = useCollisionCheck()
  const {
    step
  } = gridSpec;

  const handleUnitLocation = useRecoilCallback(({ snapshot }) => async () => {
    const coordinate = await snapshot.getPromise(unitCoordinateState);
    const direction = await snapshot.getPromise(unitDirectionState);

    let updatedCoordinate = coordinate;
    if (direction === 0) {
      updatedCoordinate = {
        ...coordinate,
        x: coordinate.x + step
      }
    }

    if (direction === 1) {
      updatedCoordinate = {
        ...coordinate,
        x: coordinate.x - step
      }
    }
    setCoordinate(updatedCoordinate)

  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (interaction === "normal") {
        handleUnitLocation();
        await getImpact();
      }

    }, 200);

    return () => clearInterval(intervalId)
  }, [interaction]);

  return (
    <StyledController />
  )
}

export {
  Controller
}