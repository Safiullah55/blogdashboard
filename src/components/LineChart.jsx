import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto"; // Make sure to use 'auto' to enable the latest features

const LineChart = ({ config }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    // Create chart instance
    const ctx = chartContainer.current.getContext("2d");
    const myChart = new Chart(ctx, config);

    return () => {
      // Clean up the chart when component unmounts
      myChart.destroy();
    };
  }, [config]);

  return <canvas ref={chartContainer} />;
};

export default LineChart;
