/** @format */

import React from 'react';
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2';
function Chart({ stocks }) {
  const data = {
    labels: stocks.data[0].values.map((item) => item.datetime),
    datasets: stocks.data.map((item, index) => ({
      label: `${item.meta.symbol} stock prices / ${item.meta.currency}`,
      data: item.values.map((i) => i.close),
      backgroundColor: item.values.map((i) => `rgba(${80 * index}, 99, 132, ${i.close / 100}`),
    })),
  };
  return (
    <>
      <h2>chart</h2>
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
