import React from 'react';
import { FC } from 'react';
// import '~/styles/sortingBarStyles/sortingBarWeb.scss';
// import '~/styles/shimmerLoader.scss';

type SortingBarLoadingProps = {
  title: string;
};
const SortingBarLoadingGenreBooks: FC<SortingBarLoadingProps> = ({ title }) => {
  return (
    <div className="sortingBar">
      <h1 className="sortingBarTitle">{title}</h1>
      <div className="selectWrapper">
        <p className="selectTitle">SORT BY</p>
        <div className="shimmerDropdown shimmerLoader"></div>
        <div className="shimmerDropdown shimmerLoader"></div>
        <div className="shimmerDropdown shimmerLoader"></div>
      </div>
    </div>
  );
};

export default SortingBarLoadingGenreBooks;
