import React, { useEffect } from "react";
import {
  useRecoilState
} from "recoil";
import styled from "styled-components";
import {
  Canvas,
  Controller
} from "../components/ingame/index";
const StyledContainer = styled.div`
display: block;
  width : 100vw;
  height : 100vh;
  background-color : #EFEFEF;
`;

const InGamePage: React.FC = () => {



  return (
    <StyledContainer>
      <Canvas />
      <Controller />
    </StyledContainer>
  )
}

export { InGamePage };