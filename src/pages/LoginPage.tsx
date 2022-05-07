import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../components/index";
import { theme } from "../styles/theme";

const StyledContainer = styled.div`
  width : 100vw;
  height: 100vh;
`;

const StyledFlex = styled.div<{ isJustifyedCenter?: boolean; isAlignedCenter?: boolean; }>(({
  isJustifyedCenter = true,
  isAlignedCenter = true
}) => {

  return `
  display : flex;
  width : 100%;
  height : 100%;
  background-color : #EBEBEB;
  ${isJustifyedCenter ? "justify-content : center" : ""};
  ${isAlignedCenter ? "align-items : center" : ""};
    `;
});

const StyledLogin = styled.div`
  width : 600px;
  height : 800px;
  border : 1px solid ${theme.primaryBorderColor};
  box-shadow: 0px 3px 15px 0px ${theme.primaryShadowRgb};
  border-radius: 15px;
`;

const LoginPage: React.FC = () => {

  const [userId, setUserId] = useState<string>("");

  return (
    <StyledContainer>
      <StyledFlex>
        <StyledLogin>
          <Input value={userId} setValue={setUserId} />
        </StyledLogin>
      </StyledFlex>
    </StyledContainer>
  )
}

export { LoginPage }