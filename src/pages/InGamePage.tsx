import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Canvas
} from "../components/common/index"
const StyledContainer = styled.div`
  width : 100vw;
  height : 100vh;
  background-color : #EFEFEF;
`;

const InGamePage: React.FC = () => {
  return (
    <StyledContainer>
      aaa
      <Canvas />
    </StyledContainer>
  )
}

export { InGamePage };