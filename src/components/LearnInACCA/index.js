import React from 'react';
import './index.css';

const cardData = [
  {
    title: 'Knowledge Level',
    points: ['Business and Technology (BT)', 'Management Association (MA)', 'Finance accounting (FA)'],
    content: '3 papers',
  },
  {
    title: 'Skill Level',
    points: [
      'Performance Management (PM)',
      'Taxation (TX)',
      'Financial Reporting (FR)',
      'Audit and Assurance (AA)',
      'Financial Management (FM)',
      'Corporate and Business Law (LW)',
    ],
    content: '6 papers',
  },
  {
    title: 'Professional Level',
    points: [
      'Strategic Business Leader (SBL)',
      'Strategic Business Reporting (SBR)',
      'Advanced Financial Management (AFM)',
      'Advanced Performance Management (APM)',
      'Advanced Taxation (ATX)',
      'Advanced Audit and Assurance (AAA)',
    ],
    subtitles: ['Competitively', 'Two out of the following'],
    content: '4 papers',
  },
];

const LearnInACCA = () => {
  return (
    <div className="learn-in-acca">
      <h2 className="learn-in-acca-heading">What will you learn In ACCA?</h2>
      <div className="underline"></div>
      <div className="learn-in-acca-card-container">
        {cardData.map((card, index) => (
          <div key={index} className="learn-in-acca-card">
            <h2 className="learn-in-acca-card-title">{card.title}</h2>
            {card.title !== 'Professional Level' ? (
              <ul className={card.title === 'Skill Level' ? "learn-in-acca-card-points square" : "learn-in-acca-card-points"}>
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <>
                <h6 className="learn-in-acca-subtitle">{card.subtitles[0]}</h6>
                <ul className="learn-in-acca-card-points">
                  <li>{card.points[0]}</li>
                  <li>{card.points[1]}</li>
                </ul>
                <h6 className="learn-in-acca-subtitle">{card.subtitles[1]}</h6>
                <ul className="learn-in-acca-card-points">
                  {card.points.slice(2).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </>
            )}
            <p className="learn-in-acca-card-content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnInACCA;
