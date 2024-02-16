import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const LineGraph = ({ data, options }) => {
  return <Line options={options} data={data} />;
};

export default LineGraph;
