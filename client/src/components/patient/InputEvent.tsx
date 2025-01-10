import React, {useState} from 'react';
import Seizures from '../../utils/EventInput';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const InputEvent = () => {
  const [startDate, setStartDate] = useState<Date | null> (new Date());

  return (
    <div className='patientDisplay'>
      <select id='eventOption'>
        <option value='' disabled selected>
          Select an Event
        </option>
        {Seizures.map((seizure, index) => (
                <option key={index} value={seizure}>
                  {seizure}
                </option>
              ))}
      </select>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <div>
          Duration
        <input type='form' placeholder='Minutes'></input>
        <input type='form' placeholder='Seconds'></input>
        </div>
      <div>Emergency Drug Administered</div>
      <input type='checkbox'></input>
    </div>
  );
};

export default InputEvent;
