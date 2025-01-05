import React from 'react';
import Patient from './Patient';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';

const MainContainer = () => {
  return (
    <div>
      <Header />
      <Title />
      <Patient />
      <Footer />
    </div>
  );
};

export default MainContainer;
