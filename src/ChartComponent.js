import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Data for the charts
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Chart 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
        {
          label: 'Chart 2',
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
        },
      ],
    };

    // Configuration for the charts
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Destroy the previous chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the new chart
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Clean up on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} width="400" height="400" />;
};

export default ChartComponent;
