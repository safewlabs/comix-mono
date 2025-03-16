import React, { FC } from 'react';
import '@assets/stylesheets/newui/sortingBarStyles/sortingBarWeb.sass.scss';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

type SortingBarLoadingProps = {
  title: string;
};

const SortingBarLoading: FC<SortingBarLoadingProps> = ({ title }) => {
  return (
    <div className="sortingBar">
      <h1 className="sortingBarTitle">{title}</h1>
      <div className="selectWrapper">
        <p className="selectTitle">SORT BY</p>
        <div className="shimmerDropdown shimmerLoader"></div>
        {title === 'LATEST COMICS' && (
          <div className="shimmerDropdown shimmerLoader"></div>
        )}
      </div>
    </div>
  );
};

export default SortingBarLoading;
