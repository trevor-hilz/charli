import React, { JSX, useEffect, useState } from 'react';
import Buttons from '../components/Buttons';
import InputEvent from '../components/patient/InputEvent';
import InputMedication from '../components/patient/InputMedication';
import ReviewData from '../components/patient/ReviewData';
import Share from '../components/patient/Share';
import Settings from '../components/patient/Settings';

const Patient = () => {
  // write react state changes here
  // default needs to be the input info button / data
  const [usePatient, setPatient] = useState<string>('reviewData');
  const changeDisplay = (value: string) => {
    console.log(value);
    setPatient(value);
  };

  const displays: { [key: string]: JSX.Element } = {
    inputEvent: <InputEvent />,
    inputMedication: <InputMedication />,
    reviewData: <ReviewData />,
    settings: <Settings />,
    share: <Share />,
  };

  return (
    <div>
      <Buttons changeDisplay={changeDisplay} />
      {displays[usePatient] || displays['reviewData']}
    </div>
  );
};

export default Patient;
