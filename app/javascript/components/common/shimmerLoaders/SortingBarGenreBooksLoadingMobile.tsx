import React, { FC, ReactNode } from 'react';
// import '@assets/stylesheets/newui/sortingBarStyles/sortingBarMobile.sass.scss';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';

type SortingLoadingMobileProps = {
  title: string;
  children?: ReactNode;
};

const SortingBarGenreBooksLoadingMobile: FC<SortingLoadingMobileProps> = ({
  title,
}) => {
  return (
    <div className="sortingBarMobile">
      <div className="sortingBarMobileTitle">{title}</div>
      <div className="dropdownMenu">
        <p className="dropdownMenuTitle">SORT BY</p>
        <div className="dropdownMenuSegmentShimmer shimmerLoader"></div>
        <div className="dropdownMenuSegmentShimmer shimmerLoader"></div>
        <div className="dropdownMenuSegmentShimmer shimmerLoader"></div>
      </div>
    </div>
  );
};

export default SortingBarGenreBooksLoadingMobile;
