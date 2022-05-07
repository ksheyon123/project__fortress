import React from "react";
import styled from "styled-components";

interface Props {
  width?: number;
  height?: number;
  img: any;
  handleOnClick?: () => void;
}


const StyledLogo = styled.div`
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo: React.FC<Props> = (props) => {

  const {
    width = 30,
    height = 30,
    img,
    handleOnClick = () => { }
  } = props;

  return (
    <StyledLogo onClick={handleOnClick}>
      <img src={img} width={width} height={height} alt="logo_img" />
    </StyledLogo>
  )
}

export { Logo }