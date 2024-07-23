import React from 'react';
import Form from '../Form';
import './index.css';

const PrepJourney = () => {
  return (
    <div className="prep-journey">
      <div className="row">
        <div className="col-md-6">
          <h2 className="prep-journey-heading">Kick off your ACCA Prep journey with IndigoLearn</h2>
          <p className="prep-journey-description">Sign-in and get instant access to our FREE Courses</p>
          <button className="start-btn">
              <span>Kick Start Prep <br /> Journey</span>
              <span className="begin">ACCA</span>
            </button>
        </div>
        <div className="col-md-6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default PrepJourney;
