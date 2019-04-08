// @vendors
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  grid-area: footer;
  padding: 10px 0;
  border-top: 1px solid #e9ecef;
`;

export default function() {
  return (
    <StyledFooter>
      Nicolas Dominguez - Github: nicosampler
    </StyledFooter>
  );
}