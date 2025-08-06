import React from 'react';
import SalesBarChart from './SalesBarChart';
import SalesOrderTotals from './SalesOrderTotals';
import EnquiryStatusChart from './EnquiryStatusChart';
import ReplyQuoteTotals from './ReplyQuoteTotals';
import PurchaseApprovalTable from './PurchaseApprovalTable';
// import './sales.scss';

const Sales = () => {
  return (
    <div className="sales-section p-4">
         <h4 className="fw-bold">Sales</h4>
      <div className="row">
        <div className="col-md-6">
          <SalesBarChart />
        </div>
        <div className="col-md-6">
          <SalesOrderTotals />
        </div>
        <div className="col-md-6 mt-4">
          <EnquiryStatusChart />
        </div>
        <div className="col-md-6 mt-4">
          <ReplyQuoteTotals />
        </div>
        <div className="col-12 mt-4">
          <PurchaseApprovalTable />
        </div>
      </div>
    </div>
  );
};

export default Sales;
