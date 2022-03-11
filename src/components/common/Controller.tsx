import React, { useEffect } from "react";
import {
  useRecoilState
} from "recoil";
import {
  unitPositionState
} from '../../state/atom';

const Controller: React.FC = () => {

  const [position, setPosition] = useRecoilState(unitPositionState);

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

  return (
    <div>
      <button onClick={() => handleBackward()}>Backword</button>
      <button onClick={() => handleForward()}>Forward</button>
    </div>
  )
}

export {
  Controller
}