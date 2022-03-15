import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import {
  useRecoilState
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

  const [location, setUnit] = useRecoilState(unitLocationState);


  const handleBackward = () => {
    setUnit({
      ...location,
      x: location.x - 10
    })
  };

  const handleForward = () => {
    console.log(location.x);
    setUnit({
      ...location,
      x: location.x + 10
    })
  }

  useEffect(() => {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      const {
        code
      } = e;
      // code : ArrowLeft, ArrowRight, ArrowUp, ArrowDown
      console.log(code);
      if (code === 'ArrowRight') {
        handleForward();
      }
      if (code === 'ArrowLeft') {
        handleBackward();
      }
      if (code === 'ArrowUp') {

      }
      if (code === 'ArrowDown') {

      }
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