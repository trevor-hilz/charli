import React, { useState } from 'react';
import Seizures from '../../utils/Seizures';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const InputEvent: React.FC = () => {
  interface EventObj {
    seizure: string;
    // Add other fields as necessary, e.g., date, minutes, etc.
  }
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [seizure, setSeizure] = useState<string>('');
  const [eventDate, setEventDate] = useState<Date>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  const [eDrug, setEDrug] = useState<boolean>(false);
  const [erVisit, setERVisit] = useState<boolean>(false);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

    // Construct the event object
    const eventObj: EventObj = {
      seizure,
      // Include other fields as necessary
      // date: startDate,
      // minutes,
      // seconds,
      // eDrug,
      // erVisit,
    };

    // Log the event object (for debugging)
    console.log('Submitting Event:', eventObj);
  };
  const gatherInfo = () => {
    const eventSubmit = (eventObj: object) => {
      return console.log('eventSubmit', seizure, eventObj);
    };
  };

  return (
    <div className='patientDisplay'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='eventOption'>Select an Event:</label>
        <select
          id='eventOption'
          value={seizure}
          onChange={(e) => setSeizure(e.target.value)}
          required // Makes the field mandatory
        >
          <option value='' disabled>
            Select an Event
          </option>
          {Seizures.map((seizureOption, index) => (
            <option key={index} value={seizureOption}>
              {seizureOption}
            </option>
          ))}
        </select>

        {/* Add other form fields here, e.g., date picker, minutes, seconds, checkboxes, etc. */}

        <button type='submit'>Submit Event</button>
      </form>
      <select id='eventOption'>
        <option value='' disabled selected>
          Select an Event
        </option>
        {Seizures.map((seizure, index) => (
          <option key={index} value={seizure}>
            {seizure}
          </option>
        ))}
        setSeizure = {seizure}
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
