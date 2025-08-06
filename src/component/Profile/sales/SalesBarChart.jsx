import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Sales Orders',
      data: [250, 400, 300, 450, 500, 350, 300,200,400,350,250,400],
      backgroundColor: '#0d6efd'
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false }
  },
  scales: {
    y: { beginAtZero: true }
  }
};

const SalesBarChart = () => (
  <Card className="shadow-sm p-3 h-100">
    <h6>Total Sales Orders by Month</h6>
    <div style={{ height: '250px' }}>
      <Bar data={data} options={options} />
    </div>
  </Card>
);

export default SalesBarChart;
