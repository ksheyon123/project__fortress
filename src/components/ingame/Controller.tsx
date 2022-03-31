import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  useRecoilState,
  useSetRecoilState,
  useRecoilCallback
} from "recoil";
import {
  unitLocationState,
} from '../../state/atom';
import {
  useCanvas
} from "../../hooks/useCanvas";
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
  const { setCoordinate, collision } = useCanvas();

  const {
    step
  } = gridSpec;

  const handleUnitLocation = useRecoilCallback(({ snapshot }) => async (code: string) => {
    const _location = await snapshot.getPromise(unitLocationState);

    collision();

    if (code === "ArrowRight") {
      setCoordinate({
        ..._location,
        lookingDirection: 0,
        x: _location.x + step
      })
    }

    if (code === "ArrowLeft") {
      setCoordinate({
        ..._location,
        lookingDirection: 1,
        x: _location.x - step
      })
    }

    if (code === "ArrowUp") {
      setCoordinate({
        ..._location,
        lookingDirection: 2,
        y: _location.y - step
      })
    }

    if (code === "ArrowDown") {
      setCoordinate({
        ..._location,
        lookingDirection: 3,
        y: _location.y + step
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