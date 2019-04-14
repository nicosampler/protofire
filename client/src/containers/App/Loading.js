// @vendors
import React from 'react';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';

const StyledLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSpinner = styled(Spinner).attrs({
  color: 'dark',
  type: 'grow'
})`
  width: 4rem;
  height: 4rem;
`;

export default function Results() {
  return (
    <StyledLoadingContainer>
      <StyledSpinner />
    </StyledLoadingContainer>
  );
}
