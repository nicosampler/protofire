// @vendors
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
// @components
import Loading from './Loading';

const NO_COLOR = '#dc3545';
const YES_COLOR = '#28a745';
const NO_YES_COLORS = [NO_COLOR, YES_COLOR];

function Results({ result, statistics }) {
  if (!statistics) {
    return <Loading />;
  }

  const { totalVotes, totalPositiveVotes } = statistics;

  const data = {
    labels: ['NO', 'YES'],
    datasets: [
      {
        data: [totalVotes - totalPositiveVotes, totalPositiveVotes],
        backgroundColor: NO_YES_COLORS,
        hoverBackgroundColor: NO_YES_COLORS
      }
    ]
  };

  return (
    <>
      <Doughnut data={data} width={50} height={10} />
      You have voted for {result ? 'Yes' : 'No'}!!
    </>
  );
}

Results.propTypes = {
  statistics: PropTypes.shape({
    totalVotes: PropTypes.string.isRequired,
    totalPositiveVotes: PropTypes.string.isRequired
  })
};

export default Results;
