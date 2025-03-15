import React, { useState } from 'react';
import HamburgerIcon from '@assets/icons/hamburger-menu-icon.svg';
import '@assets/stylesheets/newui/sortingBarStyles/hamburgerMenuStyles.scss';

const NAV_LINK_LABELS_AND_ROUTES = [
  { label: 'Comics', route: '/comics' },
  { label: 'Creators', route: '/creators' },
  { label: 'Stores', route: '/stores' },
  { label: 'Publish', route: '/publish' },
  { label: 'Crowdfunding', route: 'https://diebold.comix.one/' },
  { label: 'Card', route: '/cart' },
  { label: 'Login', route: '/login' },
  { label: 'Sign Up', route: '/signup' },
];

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="hamburgerButton"
        aria-label="Open menu"
      >
        <img src={HamburgerIcon} alt="Hamburger Icon" />
      </button>

      {isMenuOpen && (
        <div
          className="menuOverlay"
          role="dialog"
          aria-labelledby="menu-overlay-title"
        >
          <button
            className="cancelButton"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            &times;
          </button>

          <nav className="menuContent">
            <h2 id="menu-overlay-title" className="sr-only">
              Navigation Menu
            </h2>
            {NAV_LINK_LABELS_AND_ROUTES.map((labelAndRoute, index) => (
              <div key={index}>
                <a
                  href={labelAndRoute.route}
                  aria-label={`Go to ${labelAndRoute.label}`}
                  tabIndex={0}
                >
                  {labelAndRoute.label}
                </a>
                <div className="divider"></div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
