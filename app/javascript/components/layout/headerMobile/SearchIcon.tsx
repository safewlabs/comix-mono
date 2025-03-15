import React from 'react';
import SearchIcon from '@assets/icons/search-icon.svg';
import '@assets/stylesheets/newui/headerStyles/headerMobile.scss';

const SearchIconComponent = () => {
  return (
    <button>
      <img src={SearchIcon} alt="search icon" className="searchIconMobile" />
    </button>
  );
};

export default SearchIconComponent;
