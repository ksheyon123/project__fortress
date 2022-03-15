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
} from "../../actions/actions";

const StyledController = styled.div`
position: fixed;
  bottom : 0;
  width : 100vw;
  height : 150px;
  background-color: snow;
`;

const Controller: React.FC = () => {
  const setUnit = useSetRecoilState(unitLocationState);

  const handleUnitLocation = useRecoilCallback(({ snapshot }) => async (code: string) => {

    const _location = await snapshot.getPromise(unitLocationState);

    if (code === "ArrowRight") {
      setUnit({
        ..._location,
        x: _location.x + 10
      })
    }

    if (code === "ArrowLeft") {
      setUnit({
        ..._location,
        x: _location.x - 10
      })
    }

    if (code === "ArrowUp") {
      setUnit({
        ..._location,
        y: _location.y - 10
      })
    }

    if (code === "ArrowDown") {
      setUnit({
        ..._location,
        y: _location.y + 10
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