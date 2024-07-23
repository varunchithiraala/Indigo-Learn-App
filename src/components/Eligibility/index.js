import React from 'react';
import { MdMenuBook, MdOutlineLaptopChromebook } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { IoMdPaper } from "react-icons/io";
import './index.css';

const cardData = [
  { icon: <MdMenuBook className="eligibility-card-icon" />, title: 'Levels', description: 'Three(13 papers)' },
  { icon: <BsClock className="eligibility-card-icon" />, title: 'Duration', description: '6-10 months' },
  { icon: <MdOutlineLaptopChromebook className="eligibility-card-icon" />, title: 'Exams', description: 'Qualifier (Online)' },
  { icon: <IoMdPaper className="eligibility-card-icon" />, title: 'Exemptions', description: 'Upto 9 papers' },
];

const Eligibility = () => {
  return (
    <div className="eligibility-card-deck">
      {cardData.map((card, index) => (
        <div key={index} className="eligibility-card">
          <h5 className="eligibility-card-title">{card.title}</h5>
          <div className="eligibility-card-icon-text-container">
            {card.icon}
            <p className="eligibility-card-text">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Eligibility;
