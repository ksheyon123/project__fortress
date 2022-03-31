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
  const { coordinate, setCoordinate, collision } = useCanvas();

  const {
    step
  } = gridSpec;

  const handleUnitLocation = async (code: string) => {

    console.log(code);

    if (code === "ArrowRight") {
      setCoordinate({
        ...coordinate,
        lookingDirection: 0,
        x: coordinate.x + step
      })
    }

    if (code === "ArrowLeft") {
      setCoordinate({
        ...coordinate,
        lookingDirection: 1,
        x: coordinate.x - step
      })
    }

    if (code === "ArrowUp") {
      setCoordinate({
        ...coordinate,
        lookingDirection: 2,
        y: coordinate.y - step
      })
    }

    if (code === "ArrowDown") {
      setCoordinate({
        ...coordinate,
        lookingDirection: 3,
        y: coordinate.y + step
      })
    }
  };

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