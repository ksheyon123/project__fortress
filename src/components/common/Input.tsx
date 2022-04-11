import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";


interface IInputProps {
  value: string | number;
  handleOnChange: Dispatch<SetStateAction<string | number>>;
  title?: string;
  subtitle?: string;
  error?: string;
  type?: "vertical" | "horizontal";
  placeholder?: string;
}

const StyledInput = styled.div<{ isVertical: boolean }>`
  position : relative;
  display: ${props => props.isVertical ? "column" : "flex"};
  margin-bottom : 20px;
  & > div.error-area {
    color : ${theme.error}
  }
`;

const Input: React.FC<IInputProps> = (props) => {

  const {
    title,
    subtitle,
    error,
    placeholder = "",
    value,
    type = "vertical",
    handleOnChange
  } = props;

  const isVertical = type === 'vertical';

  return (
    <StyledInput isVertical={isVertical}>
      {!!title && (
        <div className="title"> {title} </div>
      )}
      <input placeholder={placeholder} value={value} onChange={(e) => handleOnChange(e.target.value)} />
      {!!subtitle && (<span>{subtitle}</span>)}
      {!!error && <div className="error-area">{error}</div>}
    </StyledInput>
  )
}

export { Input }