import React from 'react';
// import '../../styles/SystemPreferences.scss';

const SystemPreferences = () => {
  return (
    <div className="system-preferences">
      <h5>System Preferences</h5>
      <form>
        <div className="form-group">
          <label>Time Zone</label>
          <select className="form-control">
            <option>GMT</option>
            <option>IST</option>
            <option>PST</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date Format</label>
          <select className="form-control">
            <option>DD-MM-YYYY</option>
            <option>MM-DD-YYYY</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SystemPreferences;
