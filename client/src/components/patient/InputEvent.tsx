import React, { useState } from 'react';
import Seizures from '../../utils/Seizures';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const InputEvent = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const gatherInfo = () => {
    const seizurePick = document.getElementById('eventOption');
    // const seizureValue = seizurePick?.value;

    const eventObj = {
      seizure: seizurePick,
    };
    const eventSubmit = (eventObj: object) => {
      return console.log(seizurePick, eventObj);
    };
  };

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
      <DatePicker
        maxDate={Moment().toDate()}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <div className='divWrapper'>
        <div className='duration'>Duration: </div>
        <div>Min: </div>
        <input className='durationBox' type='form' defaultValue='0'></input>
        <div>Sec: </div>
        <input className='durationBox' type='form'></input>
      </div>
      <div className='row'>
        <div>Emergency Drug(s) Administered</div>
        <input type='checkbox'></input>
      </div>
      <div className='row'>
        <div>Emergency Room Visited</div>
        <input type='checkbox'></input>
      </div>

      <button onClick={() => gatherInfo()}>Submit New Entry</button>
    </div>
  );
};

export default InputEvent;
