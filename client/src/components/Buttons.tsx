import React from 'react';

const Buttons = () => {
  const changeDisplay = (value) => {
    return console.log('button clicked')
  }
  return (
    <div className='buttons'>
      <button onClick={changeDisplay(this.value)} value='InputEvent'>Input Event</button>
      <button onClick={changeDisplay} value='InputMedication'>Input Medication</button>
      <button onClick={changeDisplay} value='ReviewData'>Review Data</button>
      <button onClick={changeDisplay} value='Share'>Share</button>
      <button onClick={changeDisplay} value='Settings'>Settings</button>
    </div>
  );
};

export default Buttons;
