import React from 'react';
import SearchIcon from '@assets/icons/search-icon.svg';
import '@assets/stylesheets/newui/headerStyles/headerMobile.sass.scss';

const SearchIconComponent = () => {
  return (
    <button>
      <img src={SearchIcon} alt="search icon" className="searchIconMobile" />
    </button>
  );
};

export default SearchIconComponent;
