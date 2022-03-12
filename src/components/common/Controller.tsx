import React, { useEffect } from "react";
import styled from "styled-components";
import {
  useRecoilState
} from "recoil";
import {
  unitPositionState,
  shootingDegreeState
} from '../../state/atom';
import {
  fire
} from "../../actions/actions";

const StyledController = styled.div`
position: fixed;
  bottom : 0;
  width : 100vw;
  height : 150px;
  background-color: snow;
`;

const Controller: React.FC = () => {

  const [position, setPosition] = useRecoilState(unitPositionState);
  const [degree, setDegree] = useRecoilState(shootingDegreeState);

  useEffect(() => {

  }, []);

  const handleBackward = () => {
    setPosition({
      ...position,
      isForward: false,
      x: position.x - 10
    })
  }

  const handleForward = () => {
    setPosition({
      ...position,
      isForward: true,
      x: position.x + 10
    })
  }

  const handleOnFire = () => {
    fire(degree, position);
  }

  const handleUp = () => {
    const _degree = degree + 1;
    setDegree(_degree);
  }
  const handleDown = () => {
    const _degree = degree - 1;
    setDegree(_degree);
  }

  return (
    <StyledController>
      <button onClick={() => handleOnFire()}>Fire!</button>
      <button onClick={() => handleUp()}>Up</button>
      <button onClick={() => handleDown()}>Down</button>
      <button onClick={() => handleBackward()}>Backword</button>
      <button onClick={() => handleForward()}>Forward</button>
    </StyledController>
  )
}

export {
  Controller
}