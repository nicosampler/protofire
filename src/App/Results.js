// @vendors
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const NO_COLOR = '#dc3545';
const YES_COLOR = '#28a745';
const NO_YES_COLORS = [NO_COLOR, YES_COLOR];

export default function Results() {
  //const CanvasJS = CanvasJSReact.CanvasJS;
  const data = {
    labels: ['NO', 'SI'],
    datasets: [
      {
        data: [20, 5],
        backgroundColor: NO_YES_COLORS,
        hoverBackgroundColor: NO_YES_COLORS
      }
    ]
  };

  return (
    <>
      <Doughnut data={data} width={50} height={10} />
      You have voted for yes!!
    </>
  );
}
