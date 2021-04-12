import React from 'react';
import { Line } from 'react-chartjs-2';
import { useRouter } from 'next/router';

const RatingChart = ({ chartName, chartData }) => {

  const router = useRouter();
  const xAxis = [];
  const yAxis = [];
  chartData.sort((a, b) => a.x - b.x).map((point) => {
    xAxis.push(point.name);
    yAxis.push(point.y);
  });
  const data = {
    labels: xAxis,
    datasets: [
      {
        label: 'Overall Rating',
        fill: false,
        lineTension: 0.3,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3  ,
        pointHitRadius: 10,
        data: yAxis,
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  return (
  <>
    <h2>{chartName}</h2>
    <Line
      data={data}
      options={options}
      onElementsClick={(elems) => {
        // access episode page if element is clicked
        router.push(`/episodes/${elems[0]._index + 1}`);
      }}
    />
  </>
  );
};

export default RatingChart;

