import React, { FC, ReactNode, useState } from 'react';
import HamburgerIcon from '@assets/icons/hamburger-menu-black.svg';
// import '@assets/stylesheets/newui/sortingBarStyles/sortingBarMobile.sass.scss';

type FiltersMenuProps = {
  children: ReactNode;
};
const FiltersMenu: FC<FiltersMenuProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="filtersTitlesAndMenuButton">
        <button className="hamburgerButtonMobile" onClick={toggleMenu}>
          <img src={HamburgerIcon} alt="hamburger-menu-icon" />
        </button>
        <p className="filtersTitle">FILTERS</p>
      </div>

      {isMenuOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <button className="closeButton" onClick={toggleMenu}>
              <p>&times;</p>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default FiltersMenu;
