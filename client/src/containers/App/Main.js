// @vendors
import React from 'react';
import { Jumbotron } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// @components
import Vote from './Vote';
import Results from './Results';
import Loading from './Loading';

const StyledMain = styled.div`
  grid-area: content;
  color: #212529;
`;

function Main({ drizzle, voteInfo, statistics }) {
  if (!voteInfo || !statistics) {
    return <Loading />;
  }

  const { hasVoted, result } = voteInfo;

  return (
    <StyledMain>
      <Jumbotron>
        <h1 className="display-3">Do you like pizza?</h1>
        <hr className="my-2" />

        {hasVoted ? (
          <Results result={result} statistics={statistics} />
        ) : (
          <Vote drizzle={drizzle} />
        )}
      </Jumbotron>
    </StyledMain>
  );
}

Main.propTypes = {
  drizzle: PropTypes.object.isRequired,
  voteInfo: PropTypes.shape({
    hasVoted: PropTypes.bool.isRequired,
    result: PropTypes.bool.isRequired
  })
};

export default Main;
