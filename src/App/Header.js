import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  grid-area: header;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
`;

export default function Header() {
  return <StyledHeader>Protofire challenge</StyledHeader>;
}
