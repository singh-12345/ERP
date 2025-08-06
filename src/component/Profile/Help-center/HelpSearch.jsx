import React from 'react';

const HelpSearch = () => {
  return (
    <div className="help-search input-group">
      <input type="text" className="form-control" placeholder="Search help topics..." />
      <button className="btn btn-outline-secondary" type="button">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default HelpSearch;
