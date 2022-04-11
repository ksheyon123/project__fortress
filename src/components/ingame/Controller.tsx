import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  useRecoilValue,
  useSetRecoilState,
  useRecoilCallback
} from "recoil";
import {
  unitCoordinateState,
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
  const { getContact } = useCollisionCheck();
  const {
    step
  } = gridSpec;

  const handleUnitLocation = useRecoilCallback(({ snapshot }) => async (direction: number) => {
    const _coordinate = await snapshot.getPromise(unitCoordinateState);
    let updatedCoordinate = _coordinate;
    if (direction === 0) {
      updatedCoordinate = {
        ..._coordinate,
        lookingDirection: 0,
        x: _coordinate.x + step
      }
    }

    if (direction === 1) {
      updatedCoordinate = {
        ..._coordinate,
        lookingDirection: 1,
        x: _coordinate.x - step
      }
    }
    setCoordinate(updatedCoordinate)

  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const rnd = Math.floor(Math.random() * 2);
      if (interaction === "normal") {
        handleUnitLocation(rnd)
      }
    }, 1500);

    return () => clearInterval(interval)
  }, [interaction]);

  return (
    <StyledController />
  )
}

export {
  Controller
}