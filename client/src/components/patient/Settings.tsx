import React from 'react';

const Settings = () => {
  return (
    <div className='patientDisplay'>
      <div className='row'>
        <span>Doctor ID: </span>
        <input type='form' placeholder='Doctor ID'></input>
      </div>
      <div className='row'>
        <span>Username: </span>
        <span>Username from DB</span>
      </div>
      <div className='row'>
        <span>Email: </span>
        <span>Email from DB</span>
      </div>
      <div className='row'>
        <span>Change Password: </span>
        <span>Change Password Function</span>
      </div>
    </div>
  );
};

export default Settings;
