import React from 'react';
// import '../../styles/SecuritySettings.scss';

const SecuritySettings = () => {
  return (
    <div className="security-settings">
      <h5>Security Settings</h5>
      <div className="form-group">
        <label>Password Expiry (days)</label>
        <input type="number" className="form-control" placeholder="90" />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="2fa" />
        <label className="form-check-label" htmlFor="2fa">Enable 2-Factor Authentication</label>
      </div>
    </div>
  );
};

export default SecuritySettings;
