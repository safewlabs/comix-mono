import React, { FC, ReactNode, useState } from 'react';
import * as Select from '@radix-ui/react-select';
import DownArrowIcon from '@assets/icons/down-arrow-icon-2 copy.svg';
import UpArrowIcon from '@assets/icons/up-arrow-icon copy.svg';
// import '@assets/stylesheets/newui/sortingBarStyles/sortingBarMobile.sass.scss';

export interface SortingBarProps {
  title: string;
  onSortChange: (sortBy: string) => void;
  children?: ReactNode;
}

interface SortingOption {
  label: string;
  value: string;
}

const Options1 = {
  options: [
    { label: 'A-Z', value: 'title-az' },
    { label: 'Z-A', value: 'title-za' },
  ],
};

const Options2 = {
  options: [
    { label: 'asc', value: 'age-asc' },
    { label: 'dsc', value: 'age-dsc' },
  ],
};

const priceSortingOptions: SortingOption[] = [
  { label: 'asc', value: 'price-asc' },
  { label: 'dsc', value: 'price-desc' },
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
    <Select.Trigger className="select2">
      <Select.Value placeholder={name} />
      <img
        src={openDropdown === name ? UpArrowIcon : DownArrowIcon}
        alt="Toggle Icon"
        className="arrowIcon"
      />
    </Select.Trigger>
    <Select.Content className={style}>
      {options.map(({ label, value }, index) => (
        <Select.Item key={index} value={value} className="SelectItem2">
          <Select.ItemText>{label}</Select.ItemText>
        </Select.Item>
      ))}
    </Select.Content>
  </Select.Root>
);

const SortingBarMobileTwo: FC<SortingBarProps> = ({
  title,
  onSortChange,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const handleDropdownToggle = (name: string, isOpen: boolean) => {
    setOpenDropdown(isOpen ? name : null);
  };

  return (
    <div className="sortingBarMobile">
      <h1 className="sortingBarMobileTitle">{title}</h1>
      <div className="dropdownMenu">
        <p className="dropdownMenuTitle">SORT BY</p>
        <SortingDropdown
          name="Title"
          options={Options1.options}
          openDropdown={openDropdown}
          setOpenDropdown={handleDropdownToggle}
          style="SelectContent2Mobile"
          onSortChange={onSortChange}
        />
        <SortingDropdown
          name="Age"
          options={Options2.options}
          openDropdown={openDropdown}
          setOpenDropdown={handleDropdownToggle}
          style="SelectContent2Mobile"
          onSortChange={onSortChange}
        />
        <SortingDropdown
          name="Price"
          options={priceSortingOptions}
          openDropdown={openDropdown}
          setOpenDropdown={handleDropdownToggle}
          style="priceSortingOptionMobile2"
          onSortChange={onSortChange}
        />
      </div>
    </div>
  );
};

export default SortingBarMobileTwo;
