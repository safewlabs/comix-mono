import React, { FC } from 'react';
import Button from './Button';

interface TitleAndButtonsProps {
  routeText: string;
  title: string;
  buttonText?: string;
}

const TitleAndButtons: FC<TitleAndButtonsProps> = ({
  routeText,
  title,
  buttonText,
}) => {
  return (
    <div className="titleAndButtonsCommon">
      <h1 className="sectionTitle" aria-label={`Section title: ${title}`}>
        {title}
      </h1>
      <Button routeText={routeText} buttonText={buttonText} />
    </div>
  );
};

export default TitleAndButtons;
