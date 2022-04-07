import React from "react";
import styled from "styled-components";

interface Props {
  width?: number;
  height?: number;
  img: any
}


const StyledLogo = styled.div`
  width : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo: React.FC<Props> = (props) => {

  const {
    width = 40,
    height = 40,
    img
  } = props;

  return (
    <StyledLogo>
      <img src={img} width={width} height={height} />
    </StyledLogo>
  )
}

export { Logo }