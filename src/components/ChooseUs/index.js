import React from 'react';
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaUsers, FaBriefcase } from 'react-icons/fa';
import './index.css';

const cardData = [
  {
    icon: <HiOutlineLightBulb className="choose-us-card-icon" />,
    title: 'Expert Faculty',
    description: 'Our faculty comprises industry experts who offer exceptional education and personalized guidance, ensuring an unparalleled learning experience.'
  },
  {
    icon: <FaUsers className="choose-us-card-icon" />,
    title: 'Complete Success Package',
    description: 'We provide a comprehensive success package with tailored study materials, regular assessments, and expert support for academic excellence.'
  },
  {
    icon: <FaBriefcase className="choose-us-card-icon" />,
    title: 'Placements',
    description: 'The dedicated placement cell guarantees outstanding job opportunities, connecting you with top-tier companies to launch your career successfully.'
  }
];

const ChooseUs = () => {
  return (
    <div className="choose-us-container">
      <h2 className="choose-us-heading">Why choose Us?</h2>
      <div className="underline"></div>
      <div className="choose-us-card-container">
        {cardData.map((card, index) => (
          <div key={index} className="choose-us-card">
            {card.icon}
            <h5 className="choose-us-card-title">{card.title}</h5>
            <p className="choose-us-card-text">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
