import './C3.css'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'First Response Time',
    },
  },
};

const labels = ['2018-11-17','2018-11-18','2018-11-19','2018-11-20','2018-11-21','2018-11-22','2018-11-23','2018-11-24','2018-11-25','2018-11-26',
 '2018-11-26','2018-11-27','2018-11-28','2018-11-29','2018-11-30','2018-12-1','2018-12-2','2018-12-3','2018-120-4','2018-12-5',
  '2018-12-6','2018-12-7','2018-12-8','2018-12-9','2018-12-10','2018-12-11','2018-12-12','2018-12-12','2018-12-13','2018-12-14'];


export const data = {
  labels,
  datasets: [
    {
       fill:true,     
      label: 'last 30 days',
      data:[2,2.1,2.3,2.3,2.1,2.4,2.3,2.4,2.5,2.7,2.9,3,2.9,3,2.9,3.1,2.9,2.9,2.8,2.6,2.3,2.6,2.7,3.1,3.2,2.9,3.12,2.9,2.7,2.8,2.6,2.4],
      borderColor: 'rgb(235, 135, 221)',
      backgroundColor: 'rgb(235, 135, 221)',
    },
  ],
};

function C3() {
  return (
  <>
  <div className="container3"><Line options={options} data={data} />;
  </div>
  </>)
}
export default C3;

  