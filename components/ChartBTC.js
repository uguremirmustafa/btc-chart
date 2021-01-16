/** @format */

import React from 'react';
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2';
function Chart({ btc }) {
  const data = {
    labels: btc.values.map((item) => item.datetime),
    datasets: [
      {
        label: `${btc.meta.symbol} stock prices`,
        data: btc.values.map((i) => i.high),
        backgroundColor: 'rgba(1,1,1,.1)',
      },
      {
        label: `${btc.meta.symbol} stock prices`,
        data: btc.values.map((i) => i.low),
        backgroundColor: 'rgba(200,1,1,0.4)',
        type: 'line',
      },
    ],
  };
  return (
    <>
      <div style={{ position: 'relative', height: '50vh', width: '80vw' }}>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            responsiveAnimationDuration: 3,
            responsive: true,
            tooltips: {
              mode: 'point',
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </>
  );
}

export default Chart;
