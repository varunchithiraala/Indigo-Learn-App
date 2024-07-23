import React from 'react';
import './index.css';

const cardData = [
  {
    title: 'Resume Building',
    description: 'IFM provides tailored resumes to highlight your ACCA qualifications, making you stand out to employers.'
  },
  { 
    title: 'Career Counselling',
    description: 'We provide expert guidance on navigating your ACCA career, assisting with role selection, career development strategies, and achieving professional goals.'
  },
  { 
    title: 'Jobs',
    description: 'We will give you an array of job opportunities in finance, accounting, and management sectors.'
  },
];

const Placement = () => {
  return (
    <div className="placement-container">
      <h2 className="placement-heading">100% Placement Assistance</h2>
      <div className="underline"></div>
      {cardData.map(card => (
        <>
          <h3 className="placement-title">{card.title}</h3>
          <p className="placement-description">{card.description}</p>
        </>
      ))}
    </div>
  );
};

export default Placement;
