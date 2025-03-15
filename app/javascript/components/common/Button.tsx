import React, {FC} from 'react';

interface ButtonProps {
  routeText: string;
  buttonText?: string;
}

const Button: FC<ButtonProps> = ({ routeText, buttonText }) => {
  return (
    <div className="titleAndButtons">
      <a
        href={routeText}
        aria-label={
          buttonText
            ? `Navigate to ${buttonText}`
            : 'Navigate to the target page'
        }
      >
        <button
          className="viewAllButton"
          type="button"
          aria-label={buttonText ? buttonText : 'View all'}
        >
          {buttonText || 'View All'}
        </button>
      </a>
    </div>
  );
};

export default Button;
