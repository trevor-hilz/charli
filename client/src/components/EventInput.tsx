import React from 'react';

const EventInput = () => {
  return (
    <div>
      <button onClick={() => 'myFunction()'} className='dropbtn'>
        Dropdown
      </button>
      <div id='dropdown' className='dropdown-content'>
        <a>Tonic Clonic</a>
        <a>Absent</a>
      </div>
    </div>
  );
};

export default EventInput;
