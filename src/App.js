import React from 'react';
import Header from './components/Header';
import BecomeACCA from './components/BecomeACCA';
import ChooseUs from './components/ChooseUs';
import Eligibility from './components/Eligibility';
import LearnInACCA from './components/LearnInACCA';
import Placement from './components/Placement';
import PrepJourney from './components/PrepJourney';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BecomeACCA />
      <ChooseUs />
      <Eligibility />
      <LearnInACCA />
      <Placement />
      <PrepJourney />
    </div>
  );
};

export default App;
