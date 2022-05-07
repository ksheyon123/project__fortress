import React from "react";
import styled from "styled-components";

interface Props {
  width?: number;
  height?: number;
  img: any;
  handleOnClick?: () => void;
}


const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    aspect-ratio: auto;
  }
`

const Logo: React.FC<Props> = (props) => {

  const {
    width = 30,
    img,
    handleOnClick = () => { }
  } = props;

  return (
    <StyledLogo onClick={handleOnClick}>
      <img src={img} width={width} alt="logo_img" />
    </StyledLogo>
  )
}

export { Logo }