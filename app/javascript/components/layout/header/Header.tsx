import { FC } from 'react';
import NavLinks from './NavLinks';
import HeaderInput from './HeaderInput';
import ComixHeaderLogo from './ComixLogo';
import UserActions from './UserActions';
import '~/styles/headerStyles/header.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
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
