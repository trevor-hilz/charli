import React, {useEffect, useState} from 'react';
import Buttons from '../components/Buttons';
import InputEvent from '../components/patient/InputEvent';
import InputMedication from '../components/patient/InputMedication'
import ReviewData from '../components/patient/ReviewData';
import Share from '../components/patient/Share';
import Settings from '../components/patient/Settings';


const Patient = () => {
  const [usePatient, setPatient] = useState("");
  // write react state changes here
  // default needs to be the input info button / data
  return (
    <div>
      <Buttons />
      <InputEvent />
      <InputMedication />
      <ReviewData />
      <Share />
      <Settings />
    </div>
  );
};

export default Patient;
