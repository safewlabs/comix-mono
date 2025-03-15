import React from 'react';
import { FC, ReactNode } from 'react';
import FiltersMenu from '@javascript/components/layout/sortingBar/FiltersMenu';
import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
import '@assets/stylesheets/newui/sortingBarStyles/sortingBarMobile.sass.scss';

type SortingLoadingMobileProps = {
  title: string;
  children?: ReactNode;
};

const SortingBarLoadingMobile: FC<SortingLoadingMobileProps> = ({
  title,
  children,
}) => {
  return (
    <div className="sortingBarMobile">
      <div className="sortingBarMobileTitle">{title}</div>
      {(title === 'OUR CREATORS' && <FiltersMenu children={children} />) ||
        (title === 'LATEST COMICS' && <FiltersMenu children={children} />)}
      <div className="dropdownMenu">
        <p className="dropdownMenuTitle">SORT BY</p>
        <div className="dropdownMenuSegment shimmerLoader"></div>
        {title === 'LATEST COMICS' && (
          <div className="dropdownMenuSegment shimmerLoader"></div>
        )}
      </div>
    </div>
  );
};

export default SortingBarLoadingMobile;
