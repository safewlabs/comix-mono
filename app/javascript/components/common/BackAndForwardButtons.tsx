import React from 'react';
import { FC } from 'react';
import BackButtonSvg from 'assets/icons/BackButtonSvg';
import ForwardButtonSvg from 'assets/icons/ForwardButtonSvg';
// import '~/styles/backAndForwardButtons.scss';

interface BackAndForwardButtonsProps {
  onBack?: () => void;
  onForward?: () => void;
}

const BackAndForwardButtons: FC<BackAndForwardButtonsProps> = ({
  onBack,
  onForward,
}) => {
  return (
    <div
      className="backAndForwardButtonsWeb"
      role="group"
      aria-label="Carousel Navigation Buttons"
    >
      <button onClick={onBack} aria-label="Go to previous slide">
        <BackButtonSvg />
      </button>
      <button onClick={onForward} aria-label="Go to next slide">
        <ForwardButtonSvg />
      </button>
    </div>
  );
};

export default BackAndForwardButtons;
