import React from 'react';
import SalesCards from './SalesCards';
import SalesReport from './SalesReport';
import MostSalesChart from './MostSalesChart';
import ProductSalesTable from './ProductSalesTable';
// import './dashboard.css';

const DashboardContent = () => {
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Dashboard</h2>
     <SalesCards />
    <div className="row my-4">
        <div className="col-md-8">
          <SalesReport />
        </div>
        <div className="col-md-4">
          <MostSalesChart />
        </div>
      </div>
      <ProductSalesTable />
    </div>
  );
};

export default DashboardContent
