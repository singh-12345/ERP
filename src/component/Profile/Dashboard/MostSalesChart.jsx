import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Scissors', 'Socks', 'Wounds', 'Forceps'],
  datasets: [
    {
      label: 'Most Sales',
      data: [40, 25, 20, 10],
      backgroundColor: ['#0d6efd', '#20c997', '#ffc107', '#6f42c1'],
    },
  ],
};

const MostSalesChart = () => (
  <Card className="shadow-sm h-100">
    <Card.Body>
      <h5 className="mb-3">Most Sales</h5>
      <div style={{ height: '250px' }}>
        <Doughnut data={data} />
      </div>
    </Card.Body>
  </Card>
);

export default MostSalesChart;
