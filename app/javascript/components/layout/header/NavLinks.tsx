import React, { FC } from 'react';
// import '@assets/stylesheets/newui/headerStyles/header.sass.scss';

const NAV_LINK_LABELS_AND_ROUTES = [
  { label: 'Comics', route: '/comics' },
  { label: 'Creators', route: '/creators' },
  { label: 'Stores', route: '/stores' },
  { label: 'Publish', route: '/publish' },
  { label: 'Crowdfunding', route: 'https://diebold.comix.one/' },
];

const NavLinks: FC = () => {
  return (
    <nav className="navContainer">
      {NAV_LINK_LABELS_AND_ROUTES.map((labelAndRoute, index) => (
        <a href={labelAndRoute.route} key={index} className="navLinks">
          {labelAndRoute.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
