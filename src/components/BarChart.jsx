// BarChart.js
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto"; // Make sure to use 'auto' to enable the latest features

const BarChart = ({ barConfig, barLabels }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    // Create chart instance
    const ctx = chartContainer.current.getContext("2d");
    const myChart = new Chart(ctx, barConfig);

    return () => {
      // Clean up the chart when component unmounts
      myChart.destroy();
    };
  }, [barConfig]);

  return <canvas ref={chartContainer} />;
};

export default BarChart;
