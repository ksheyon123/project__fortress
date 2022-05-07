import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
interface IProps {
  handleOnClick: () => void;
  name: string;
  disabled?: boolean;
  title?: string;
  err?: string;
  desc?: string;
  align?: "right" | "left";
}

const StyledButton = styled.div<{ align: "right" | "left" }>`
  display : flex;
  justify-content :${props => props.align === "left" ? "flex-start" : "flex-end"};
  & > div.btn-area {
    width : 180px;
    & > div.btn-title {
      ${theme.b2}
      margin-bottom : 10px;
    } 
    & > button {
      width : 100%;
      color : ${theme.mono100};
      padding : 15px 20px;
      border-radius : 5px;
      border: none;
      background-color: ${theme.primaryBorderColor};
      box-shadow : 0px 3px 10px 0px ${theme.primaryShadowRgb};
    }
    & > span {
      margin-left : 15px;
    }
  }
  & > div.err-txt {
    position : absolute;
    color : ${theme.err};
  }
`;

const Button: React.FC<IProps> = (props) => {

  const {
    handleOnClick,
    name,
    disabled = false,
    title,
    err,
    desc,
    align = "right"
  } = props;

  return (
    <StyledButton align={align}>
      <div className="btn-area">
        {!!title && <div className="btn-title">{title}</div>}
        <button disabled={disabled} onClick={handleOnClick}>
          {name}
        </button>
        {!!desc && <span>{desc}</span>}
      </div>

      {!!err && <div className="err-txt">{err}</div>}
    </StyledButton>
  )
}

export { Button }