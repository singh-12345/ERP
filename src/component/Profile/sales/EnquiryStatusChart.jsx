import React from 'react';
import { Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Closed', 'Converted to Sales Lead', 'Converted to Service'],
  datasets: [
    {
      data: [20, 40, 40],
      backgroundColor: ['#dc3545', '#198754', '#0d6efd'],
    }
  ]
};

const EnquiryStatusChart = () => (
  <Card className="shadow-sm p-3 h-100">
    <h6>Enquiry Status Pie Chart</h6>
    <div style={{ height: '250px' }}>
      <Pie data={data} />
    </div>
  </Card>
);

export default EnquiryStatusChart;
