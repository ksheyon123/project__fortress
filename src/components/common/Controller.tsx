import React, { useEffect } from "react";
import {
  useRecoilState
} from "recoil";
import {
  unitPositionState
} from '../../state/atom';

const Controller: React.FC = () => {

  useEffect(() => {

  }, []);

  return (
    <div>
      <button>Backword</button>
      <button>Forward</button>
    </div>
  )
}

export {
  Controller
}