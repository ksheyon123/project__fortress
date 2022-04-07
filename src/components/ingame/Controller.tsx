import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilCallback
} from "recoil";
import {
  unitCoordinateState,
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
  height : 100px;
  background-color: ${theme.background};
  border-top: 1px solid ${theme.pixel};
`;

const Controller: React.FC = () => {
  const setCoordinate = useSetRecoilState(unitCoordinateState);
  const { getContact } = useCollisionCheck();
  const {
    step
  } = gridSpec;

  const handleUnitLocation = useRecoilCallback(({ snapshot }) => async (code: string) => {
    const _coordinate = await snapshot.getPromise(unitCoordinateState);
    let updatedCoordinate = _coordinate;
    if (code === "ArrowRight") {
      updatedCoordinate = {
        ..._coordinate,
        lookingDirection: 0,
        x: _coordinate.x + step
      }
    }

    if (code === "ArrowLeft") {
      updatedCoordinate = {
        ..._coordinate,
        lookingDirection: 1,
        x: _coordinate.x - step
      }
    }

    if (code === "ArrowUp") {
      updatedCoordinate = {
        ..._coordinate,
        lookingDirection: 2,
        y: _coordinate.y - step
      }
    }

    if (code === "ArrowDown") {
      updatedCoordinate = {
        ..._coordinate,
        lookingDirection: 3,
        y: _coordinate.y + step
      }
    }
    const hasCollision = await getContact(updatedCoordinate);
    if (hasCollision) {
      return;
    }
    setCoordinate(updatedCoordinate)

  }, []);

  useEffect(() => {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      const {
        code
      } = e;

      // code : ArrowLeft, ArrowRight, ArrowUp, ArrowDown
      handleUnitLocation(code);
    })
  }, []);

  return (
    <StyledController>


    </StyledController>
  )
}

export {
  Controller
}