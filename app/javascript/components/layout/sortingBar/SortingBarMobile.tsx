import React, { FC, ReactNode, useState } from 'react';
import * as Select from '@radix-ui/react-select';
import DownArrowIcon from '@assets/icons/down-arrow-icon-2 copy.svg';
import UpArrowIcon from '@assets/icons/up-arrow-icon copy.svg';
import FiltersMenu from './FiltersMenu';
import '@assets/stylesheets/newui/sortingBarStyles/sortingBarMobile.sass.scss';

export interface SortingBarProps {
  title: string;
  onSortChange: (sortBy: string) => void;
  children?: ReactNode;
}

interface SortingOption {
  label: string;
  value: string;
}

export const sortingOptions: Record<
  string,
  { options: SortingOption[]; style: string }
> = {
  STORES: {
    options: [
      { label: 'Title A-Z', value: 'title-az' },
      { label: 'Title Z-A', value: 'title-za' },
    ],
    style: 'SelectContent3',
  },
  'OUR CREATORS': {
    options: [
      { label: 'Title A-Z', value: 'title-az' },
      { label: 'Title Z-A', value: 'title-za' },
    ],
    style: 'SelectContent3',
  },
  'LATEST COMICS': {
    options: [
      { label: 'Title A-Z', value: 'title-az' },
      { label: 'Title Z-A', value: 'title-za' },
    ],
    style: 'SelectContent1',
  },
  GENRES: {
    options: [
      { label: 'Title A-Z', value: 'title-az' },
      { label: 'Title Z-A', value: 'title-za' },
    ],
    style: 'SelectContent3',
  },
};

const priceSortingOptions: SortingOption[] = [
  { label: 'Low To High', value: 'price-asc' },
  { label: 'High To Low', value: 'price-desc' },
];

const SortingDropdown: FC<{
  name: string;
  options: SortingOption[];
  openDropdown: string | null;
  setOpenDropdown: (name: string, isOpen: boolean) => void;
  style: string;
  onSortChange: (sortBy: string) => void;
}> = ({
  name,
  options,
  openDropdown,
  setOpenDropdown,
  style,
  onSortChange,
}) => (
  <Select.Root
    onOpenChange={(isOpen) => setOpenDropdown(name, isOpen)}
    onValueChange={onSortChange}
  >
    <Select.Trigger className="select">
      <Select.Value placeholder={name} />
      <img
        src={openDropdown === name ? UpArrowIcon : DownArrowIcon}
        alt="Toggle Icon"
        className="arrowIcon"
      />
    </Select.Trigger>
    <Select.Content className={style}>
      {options.map(({ label, value }, index) => (
        <Select.Item key={index} value={value} className="SelectItem">
          <Select.ItemText>{label}</Select.ItemText>
        </Select.Item>
      ))}
    </Select.Content>
  </Select.Root>
);

const SortingBarMobile: FC<SortingBarProps> = ({
  title,
  onSortChange,
  children,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string, isOpen: boolean) => {
    setOpenDropdown(isOpen ? name : null);
  };

  return (
    <div className="sortingBarMobile">
      <h1 className="sortingBarMobileTitle">{title}</h1>
      {(title === 'OUR CREATORS' && <FiltersMenu children={children} />) ||
        (title === 'LATEST COMICS' && <FiltersMenu children={children} />)}
      <div className="dropdownMenu">
        <p className="dropdownMenuTitle">SORT BY</p>
        {sortingOptions[title] && (
          <SortingDropdown
            name="Title"
            options={sortingOptions[title].options}
            openDropdown={openDropdown}
            setOpenDropdown={handleDropdownToggle}
            style={sortingOptions[title].style}
            onSortChange={onSortChange}
          />
        )}
        {title === 'LATEST COMICS' && (
          <SortingDropdown
            name="Price"
            options={priceSortingOptions}
            openDropdown={openDropdown}
            setOpenDropdown={handleDropdownToggle}
            style="priceSortingOptionMobile"
            onSortChange={onSortChange}
          />
        )}
      </div>
    </div>
  );
};

export default SortingBarMobile;
