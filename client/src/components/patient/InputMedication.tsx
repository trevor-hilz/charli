import React from 'react';
import Medications from '../../utils/Medications';

const InputMedication = () => {
  return (
    <div className='patientDisplay'>
      <div>Add new Medication:</div>
      <select id='medicationOption'>
        <option value='' disabled selected>
          Select a Medication
        </option>
        {Medications.map((medication, index) => (
          <option key={index} value={medication}>
            {medication}
          </option>
        ))}
      </select>
      <div>
        <span>Dosage: </span>
        <input
          type='form'
          id='medicationDosage'
          placeholder='mg/ml etc.'
        ></input>
      </div>
    </div>
  );
};

export default InputMedication;
