import React from 'react';
import AccountsHeader from './AccountsHeader';
import AccountFilters from './AccountFilters';
import AccountsTable from './AccountsTable';
// import './accounts.css';

const Accounts = () => {
  return (
    <div className="container-fluid p-4">
      <AccountsHeader />
      <AccountFilters />
      <AccountsTable />
    </div>
  );
};

export default Accounts;
