import React from "react";
import styled from "styled-components";
import { Input } from "../components/common/";
import { theme } from "../styles/theme";

const StyledContainer = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  width : 100vw;
  height : 100vh;
`;

const StyledLogin = styled.div`
  margin : auto 20px;
  height : 400px;
  width : 100%;
  border-radius: 10px;
  border : 1px solid ${theme.mono3Div};
  padding : 40px 15px;
  box-shadow : 0px 3px 10px 0px rgba(32, 32, 32, 0.12);
`;

const LoginPage: React.FC = () => {
  return (
    <StyledContainer>
      <StyledLogin>
        <Input type={"vertical"} value={0} handleOnChange={() => { }} title={"ID"} subtitle={"아이디를 입력해주세요."} error={"Error!"} />
      </StyledLogin>
    </StyledContainer>
  )
}
export { LoginPage }