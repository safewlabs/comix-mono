import React, { useState, FC } from 'react';
import { stakedCardsData } from './StackedCards';
// import '@assets/stylesheets/newui/creatorsStyles/stackedCards.sass.scss';

const StackedCardsMobile: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleCardFocus = (index: number) => {
    setHoveredIndex(index);
  };

  const handleCardBlur = () => {
    setHoveredIndex(0);
  };

  return (
    <div className="cardContainerMobile">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`card ${
            hoveredIndex === index ? 'expanded' : 'collapsed'
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(0)}
          onFocus={() => handleCardFocus(index)}
          onBlur={handleCardBlur}
          tabIndex={0}
          role="button"
        >
          <div className="cardContent">
            <div className="cardHeadingAndTagline">
              <p className="cardHeading">
                {stakedCardsData[index].heading.toUpperCase()}
              </p>
              <p className="cardTagline">{stakedCardsData[index].tagline}</p>
            </div>
            <div className="cardImage">
              <img
                src={stakedCardsData[index].url}
                alt={stakedCardsData[index].heading}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackedCardsMobile;
