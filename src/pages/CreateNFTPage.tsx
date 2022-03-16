import React from "react";
import styled from "styled-components";
import {
  ToolTab
} from "../components/creator/index";

const StyledContainer = styled.div`
  width : 100%;
  height : 100vh;
`;

const CreateNFTPage: React.FC = () => {
  return (
    <>
      <StyledContainer>
        <ToolTab />
      </StyledContainer>
    </>
  )
}

export { CreateNFTPage };