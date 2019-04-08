// @vendors
import React from 'react';
import { Jumbotron } from 'reactstrap';
import styled from 'styled-components';
import Vote from './Vote';
import Results from './Results';
import Loading from './Loading';

const StyledMain = styled.div`
  grid-area: content;
  color: #212529;
`;

export default function() {
  return (
    <StyledMain>
      <Jumbotron>
        <h1 className="display-3">Do you like pizza?</h1>
        <hr className="my-2" />
        <Vote />
        <Results />
        <Loading />
      </Jumbotron>
    </StyledMain>
  );
}
