import React from 'react';
import styled from "styled-components";

import {
  Pallet
} from "./Pallet";

const StyledToolTab = styled.div`
  width : 100%;
  height : 60px;
  padding: 0px 10px;
  box-shadow : 0px 3px 15px 0px rgba(32, 32, 32, 0.08);
  box-sizing: border-box;
`;

const ToolTab: React.FC = () => {
  return (
    <StyledToolTab>
      <Pallet />
    </StyledToolTab>
  )
}

export { ToolTab };