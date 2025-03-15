import { FC } from 'react';
import SearchIcon from '../../../../assets/icons/search-icon.svg';
import '~/styles/headerStyles/header.scss';

const HeaderInput: FC = () => {
  return (
    <div className="inputWrapper">
      <input
        placeholder="Comics Or Creators"
        className="headerInput"
        aria-label="Search for Comics or Creators"
      />
      <img
        src={SearchIcon}
        alt="Search Icon"
        className="searchIcon"
        aria-hidden="true"
      />
    </div>
  );
};

export default HeaderInput;
