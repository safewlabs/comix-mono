import React, { FC } from 'react';
import NavLinks from './NavLinks';
import HeaderInput from './HeaderInput';
import ComixHeaderLogo from './ComixLogo';
import UserActions from './UserActions';
import '@assets/stylesheets/newui/headerStyles/header.sass.scss';

const Header: FC = () => {
  return (
    <div className="header">
      <ComixHeaderLogo />
      <NavLinks />
      <HeaderInput />
      <UserActions />
    </div>
  );
};

export default Header;
