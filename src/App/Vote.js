// @vendors
import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 25px;
`;

export default function Vote() {
  return (
    <StyledButtonGroup>
      <Button color="danger">NO!</Button>
      <Button color="success">YES!</Button>
    </StyledButtonGroup>
  );
}
