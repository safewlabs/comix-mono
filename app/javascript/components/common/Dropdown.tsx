import React, { useState } from 'react';
// import '@assets/stylesheets/newui/sortingBarStyles/dropdown.sass.scss';

const Dropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown">
      <label htmlFor="dropdown" className="dropdownLabel">
        Select an option
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        aria-label="Dropdown to select an option"
      >
        <option value="" disabled>
          Following
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
