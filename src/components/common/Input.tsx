import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IProps {
  setValue: (e: any) => void;
  value: string | number;
  width?: number;
  disabled?: boolean;
  placeholder?: string;
  title?: string;
  err?: string;
  desc?: string;
  type?: "vertical" | "horizontal";
  icon?: string;
}

const StyledInput = styled.div<{ type: "vertical" | "horizontal"; icon?: string; width: number; }>`
  width : ${props => props.width + "px"};
  margin-bottom : 20px;
  & > div.input-area {
    display: ${props => props.type === "vertical" ? "block" : "flex"};
    & > input {
      padding : 10px 20px;
    }
  }
  & > div.err-txt {
    position : absolute;
    color : ${theme.err};
  }
`;

const Input: React.FC<IProps> = (props) => {

  const {
    setValue,
    value,
    width = 350,
    disabled = false,
    placeholder = "",
    title = "a",
    err = "a",
    desc = "a",
    type = "vertical"
  } = props;

  return (
    <StyledInput type={type} width={width}>
      <div className="input-area">
        {!!title && <div className="input-title">{title}</div>}
        <input disabled={disabled} placeholder={placeholder} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        {!!desc && <span>{desc}</span>}
      </div>
      {!!err && <div className="err-txt">{err}</div>}
    </StyledInput>
  )
}

export { Input }