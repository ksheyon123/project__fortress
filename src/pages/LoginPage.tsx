import React, { useState } from "react";
import styled from "styled-components";
import {
  Input,
  Button
} from "../components/index";
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
  background-color :${theme.mono6BG};
  ${isJustifyedCenter ? "justify-content : center" : ""};
  ${isAlignedCenter ? "align-items : center" : ""};
    `;
});

const StyledLogin = styled.div`
  border : 1px solid ${theme.primaryBorderColor};
  box-shadow: 0px 3px 15px 0px ${theme.primaryShadowRgb};
  border-radius: 15px;
  padding : 40px 15px;
`;

const LoginPage: React.FC = () => {

  const [userId, setUserId] = useState<string>("");

  return (
    <StyledContainer>
      <StyledFlex>
        <StyledLogin>
          <Input title="ID" value={userId} setValue={setUserId} placeholder={"사용자 ID를 입력해 주세요."} />
          <Input title="PASSWORD" value={userId} setValue={setUserId} placeholder={"사용자 ID를 입력해 주세요."} />
          <Button name="로그인" handleOnClick={() => { }} />
        </StyledLogin>
      </StyledFlex>
    </StyledContainer>
  )
}

export { LoginPage }