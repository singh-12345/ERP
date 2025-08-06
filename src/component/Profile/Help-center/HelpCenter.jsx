import React from 'react';
import HelpSidebar from './HelpSidebar';
import HelpContent from './HelpContent';
import HelpSearch from './HelpSearch';


const HelpCenter = () => {
  return (
    <div className="help-center container-fluid p-4">
      <h2 className="mb-4">Help Center</h2>
      <HelpSearch />
      <div className="row mt-4">
        <div className="col-md-3">
          <HelpSidebar />
        </div>
        <div className="col-md-9">
          <HelpContent />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
