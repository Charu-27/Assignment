
import './C2.css'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
  },
  responsive: true,
  plugins: {
    legend: {
      
    },
    title: {
       display: true,
      text: 'Tickets Solved by Agents',
    },
  },
};

const labels = ['Tanner Hodge','Lynda shames','Luke Burke','Kai Gaines','Kenzie Fields','Sophie Mortimer','Leanne coy','Kayia Park','Sarah Mathews','James Murdock'];

export const data = {
  labels,
  datasets: [
    {

      data:[117,65,59,56,54,51,40,32,29,23],
      backgroundColor: 'rgb(125, 187, 5)',
    },
  ],
};

 function C2() {
  return(<>
   <div className="container2" >
  <Bar className="bargraph"  options={options} data={data} />;
  </div>
  </>)
}
export default C2;
