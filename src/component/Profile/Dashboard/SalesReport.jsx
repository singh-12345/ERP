import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  datasets: [{
    label: 'Sales',
    data: [20000, 30000, 40000, 35000, 55000, 30000, 50000, 25000, 40000],
    borderColor: '#0d6efd',
    backgroundColor: 'rgba(13, 110, 253, 0.2)',
    fill: true,
    tension: 0.4
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false
};

const SalesReport = () => (
  <Card className="shadow-sm h-100">
    <Card.Body>
      <h5 className="mb-3">Sales Report</h5>
      <div style={{ height: '250px' }}>
        <Line data={data} options={options} />
      </div>
    </Card.Body>
  </Card>
);

export default SalesReport;
