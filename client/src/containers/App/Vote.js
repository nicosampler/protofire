// @vendors
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { drizzleReactHooks } from 'drizzle-react';
// @constants
import { VOTE_COST } from './constants';
// @components
import Loading from './Loading';

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 25px;
`;

function Vote({ drizzle }) {
  const [stackId, setStackId] = useState(null);

  const { account } = drizzleReactHooks.useDrizzleState(drizzleState => ({
    account: drizzleState.accounts[0]
  }));

  const onVote = voteResult => () => {
    const contract = drizzle.contracts.Ballot;
    const stackId = contract.methods['vote'].cacheSend(voteResult, {
      from: account,
      value: VOTE_COST
    });

    setStackId(stackId);
  };

  return (
    <StyledButtonGroup>
      {!stackId ? (
        <>
          <Button color="danger" onClick={onVote(false)}>
            NO!
          </Button>
          <Button color="success" onClick={onVote(true)}>
            YES!
          </Button>
        </>
      ) : (
        <Loading />
      )}
    </StyledButtonGroup>
  );
}

Vote.propTypes = {
  drizzle: PropTypes.object.isRequired
};

export default Vote;