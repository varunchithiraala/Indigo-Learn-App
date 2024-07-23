import React from 'react';
import { FaClipboardList, FaBook, FaYoutube, FaChalkboardTeacher } from 'react-icons/fa';
import Form from '../Form';
import './index.css';

// Updated cardData to use the imported icon components
const cardData = [
  { icon: <FaClipboardList className="become-acca-card-icon" />, title: 'Registered Users', description: '3,28,987' },
  { icon: <FaBook className="become-acca-card-icon" />, title: 'Courses Enrolled', description: '1,01,329' },
  { icon: <FaYoutube className="become-acca-card-icon" />, title: 'Minutes Watched', description: '2,60,43,689' },
  { icon: <FaChalkboardTeacher className="become-acca-card-icon" />, title: 'Faculty', description: '8 Experts' },
];

const BecomeACCA = () => {
  return (
    <div className="become-acca-container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="become-acca-heading">Become ACCA In 18 Months</h1>
          <p className="become-acca-description">
            Association of Charted Accountants(ACCA) qualification is a globally recognised certification 
            in accounting, audit and finance. Begin ACCA prep and get placed in Top MNCs.
          </p>
          <div className="card-details-deck">
            {cardData.map((card, index) => (
              <div key={index} className="card-details-container">
                <div className="card-icon-title-container">
                  {card.icon}
                  <h5 className="become-acca-card-title">{card.title}</h5>
                </div>
                <p className="become-acca-card-text">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="delete-start-buttons">
            <button className="download-btn">Download Brochure</button>
            <button className="start-btn">
              <span>Kick Start Prep <br /> Journey</span>
              <span className="begin">ACCA</span>
            </button>
            </div>
        </div>
        <div className="col-md-6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default BecomeACCA;
