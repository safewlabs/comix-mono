import React from 'react';
import '@assets/stylesheets/newui/storeFrontPageStyles/storeFrontPageWebStyles.sass.scss';
import shareIcon from '@assets/icons/share-icon.svg';
import backIcon from '@assets/icons/back-icon-white-fill.svg';

const NavigationBar = () => {
  return (
    <div className="navigationBarWeb">
      <div className="buttonAndButtonText">
        <button>
          <img src={backIcon} alt="back icon" />
        </button>
        <p className="buttonText">BACK TO STORES</p>
      </div>
      <button>
        <img src={shareIcon} alt="share icon" />
      </button>
    </div>
  );
};

export default NavigationBar;
