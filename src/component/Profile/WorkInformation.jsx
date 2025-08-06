import React from 'react';

const WorkInformation = () => {
  return (
    <div className="work-info-tab card p-4 mb-4">
      <h2 className="title text-center">ERP Software</h2>
      <p className="subtitle text-center">
        Every ERP has a shared database with individual modules that share real-time information
        back to the central database, which is then accessible by all the other modules.
      </p>

      <div className="steps row text-center">
        <div className="col-md-3 step">
          <div className="circle">01</div>
          <h5 className="step-title">Shared Database</h5>
          <p className="description">
            All your business data is stored here for easy access by all relevant teams and personnel.
          </p>
        </div>

        <div className="col-md-3 step">
          <div className="circle blue">02</div>
          <h5 className="step-title">Modules</h5>
          <p className="description">
            Each department has a corresponding module (accounting, purchasing, CRM, etc.).
          </p>
        </div>

        <div className="col-md-3 step">
          <div className="circle black">03</div>
          <h5 className="step-title">Data Updates</h5>
          <p className="description">
            When data in one module is updated, that information is then shared with the rest of the ERP modules.
          </p>
        </div>

        <div className="col-md-3 step">
          <div className="circle orange">04</div>
          <h5 className="step-title">Info Continuity</h5>
          <p className="description">
            Now, all departments have access to real-time data from adjacent departments, increasing accuracy and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkInformation;
