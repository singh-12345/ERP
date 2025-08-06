import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Net Pay',
      backgroundColor: '#f87171',
      data: [13450440, 13850440, 13250440, 13000440, 13450440]
    },
    {
      label: 'Taxes',
      backgroundColor: '#fb923c',
      data: [11506515, 11806515, 12006515, 11706515, 11506515]
    },
    {
      label: 'Statutories',
      backgroundColor: '#facc15',
      data: [50161320, 48961320, 50361320, 50161320, 50161320]
    },
    {
      label: 'Deductions',
      backgroundColor: '#34d399',
      data: [29646760, 28646760, 29046760, 29646760, 29646760]
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom' }
  },
  scales: {
    y: { beginAtZero: true }
  }
};

const PayrollChart = () => {
  return (
    <Card className="shadow-sm mt-3">
      <Card.Body>
        <div className="d-flex justify-content-between mb-3">
          <h6 className="fw-bold">Payroll Cost Summary</h6>
          <span className="text-muted small">This year</span>
        </div>
        <div style={{ height: '250px' }}>
          <Bar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PayrollChart;
