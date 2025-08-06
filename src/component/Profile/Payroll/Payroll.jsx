import React from 'react';
import PayrollHeader from './PayrollHeader';
import PayrollDeduction from './PayrollDeduction';
import PayrollEmployees from './PayrollEmployees';
import PayrollChart from './PayrollChart';
// import './payroll.scss';

const Payroll = () => {
  return (
    <div className="payroll-container p-4">
      <PayrollHeader />
      <div className="row my-4">
        <div className="col-md-8">
          <div className="row">
            <PayrollDeduction />
            <PayrollEmployees />
          </div>
          <PayrollChart />
        </div>
      </div>
    </div>
  );
};

export default Payroll;
