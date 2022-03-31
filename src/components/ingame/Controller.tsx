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

const StyledController = styled.div`
position: fixed;
  bottom : 0;
  width : 100vw;
  height : 150px;
  background-color: snow;
`;

const Controller: React.FC = () => {
  const setCoordinate = useSetRecoilState(unitCoordinateState);
  const { getContact } = useCollisionCheck();
  const {
    step
  } = gridSpec;

  const handleUnitLocation = useRecoilCallback(({ snapshot }) => async (code: string) => {
    const _coordinate = await snapshot.getPromise(unitCoordinateState);
    if (await getContact()) {
      return;
    }
    if (code === "ArrowRight") {
      setCoordinate({
        ..._coordinate,
        lookingDirection: 0,
        x: _coordinate.x + step
      })
    }

    if (code === "ArrowLeft") {
      setCoordinate({
        ..._coordinate,
        lookingDirection: 1,
        x: _coordinate.x - step
      })
    }

    if (code === "ArrowUp") {
      setCoordinate({
        ..._coordinate,
        lookingDirection: 2,
        y: _coordinate.y - step
      })
    }

    if (code === "ArrowDown") {
      setCoordinate({
        ..._coordinate,
        lookingDirection: 3,
        y: _coordinate.y + step
      })
    }
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