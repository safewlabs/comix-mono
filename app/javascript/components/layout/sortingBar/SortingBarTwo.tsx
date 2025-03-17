import React, { FC, useState } from 'react';
import { SortingDropdown } from './SortingBar';
import { SortingBarProps } from './SortingBarMobile';
import { priceSortingOptions } from './SortingBar';
// import '@assets/stylesheets/newui/sortingBarStyles/sortingBarWeb.sass.scss';

const Options1 = {
  options: [
    { label: 'Title A-Z', value: 'title-az' },
    { label: 'Title Z-A', value: 'title-za' },
  ],
  style: 'SelectContent3',
};

const Options2 = {
  options: [
    { label: 'Age-asc', value: 'age-asc' },
    { label: 'Age-dsc', value: 'age-dsc' },
  ],
  style: 'SelectContent3',
};

const SortingBarTwo: FC<SortingBarProps> = ({ title, onSortChange }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string, isOpen: boolean) => {
    setOpenDropdown(isOpen ? name : null);
  };

  return (
    <div className="sortingBar">
      <h1 className="sortingBarTitle">{title}</h1>
      <div className="selectWrapper">
        <p className="selectTitle">SORT BY</p>
        <SortingDropdown
          name="Title"
          options={Options1.options}
          openDropdown={openDropdown}
          setOpenDropdown={handleDropdownToggle}
          style="SelectContent3"
          onSortChange={onSortChange}
        />
        <SortingDropdown
          name="Price"
          options={priceSortingOptions}
          openDropdown={openDropdown}
          setOpenDropdown={handleDropdownToggle}
          style="SelectContent2"
          onSortChange={onSortChange}
        />
        <SortingDropdown
          name="Age"
          options={Options2.options}
          openDropdown={openDropdown}
          setOpenDropdown={handleDropdownToggle}
          style="SelectContent3"
          onSortChange={onSortChange}
        />
      </div>
    </div>
  );
};

export default SortingBarTwo;
