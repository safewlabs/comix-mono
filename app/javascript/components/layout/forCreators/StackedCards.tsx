import { useState, FC } from 'react';
import ForCreators1 from '../../../../assets/forCreators/for-creators-1.svg';
import ForCreators2 from '../../../../assets/forCreators/for-creators-2.svg';
import ForCreators3 from '../../../../assets/forCreators/for-creators-3.svg';
import '~/styles/creatorsStyles/stackedCards.scss';

export const stakedCardsData = [
  {
    heading: 'Create, showcase, and sell your work effortlessly.',
    tagline:
      'Bring your work to life: crowdfund, sell your back catalog and issues in our marketplace, or seamlessly add them to your campaign!',
    url: ForCreators1,
  },
  {
    heading: 'Gain visibility and connect with new audiences.',
    tagline:
      'Expand your audience and get discovered by new supporters through our vibrant marketplace, designed to connect your work with people who share your passion.',
    url: ForCreators2,
  },
  {
    heading: 'Connect personally with your fans in real-time.',
    tagline:
      'Engage directly with your fans, build lasting connections, gather valuable feedback through surveys, and keep them coming back for more.',
    url: ForCreators3,
  },
];

const StackedCards: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleCardFocus = (index: number) => {
    setHoveredIndex(index);
  };

  const handleCardBlur = () => {
    setHoveredIndex(0);
  };

  return (
    <div className="cardContainer">
      {[0, 1, 2].map((index) => (
        <div
          key={`${index}`}
          className={`card ${
            hoveredIndex === index ? `expanded` : `collapsed`
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

export default StackedCards;
