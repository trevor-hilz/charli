import React from 'react';
interface ButtonsProps {
  changeDisplay: (value: string) => void;
}

const Buttons: React.FC<ButtonsProps> = ({changeDisplay}) => {
  return (
    <div className='buttons'>
      <button id='inputEventBtn' value='inputEvent' onClick={(e) => changeDisplay(e.currentTarget.value)}>Input Event</button>
      <button id='inputMedicationBtn' value='inputMedication' onClick={(e) => changeDisplay(e.currentTarget.value)}>Input Medication</button>
      <button id='reviewDataBtn' value='reviewData' onClick={(e) => changeDisplay(e.currentTarget.value)}>Review Data</button>
      <button id='shareBtn' value='share' onClick={(e) => changeDisplay(e.currentTarget.value)}>Share</button>
      <button id='settingsBtn' value='settings' onClick={(e) => changeDisplay(e.currentTarget.value)}>Settings</button>
    </div>
  );
};

export default Buttons;
