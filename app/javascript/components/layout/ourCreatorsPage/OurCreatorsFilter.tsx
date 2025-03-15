import React, { useState, useEffect } from 'react';
import DownArrowIcon from '@assets/icons/down-arrow-icon-2.svg';
import UpArrowIcon from '@assets/icons/up-arrow-icon.svg';
import '@assets/stylesheets/newui/filtersStyles.sass.scss';

const skillsList = [
  'Artist',
  'Cover Artist',
  'Cover Design',
  'Crowdfunding',
  'Editing',
  'Formatting For Print',
  'Inks',
  'Letters',
  'Pin-ups',
  'Production Lead',
  'Publishing',
  'Script Formatting',
  'Writer',
];

const OurCreatorsFilter = () => {
  const [showOptions, setShowOptions] = useState<boolean>(true);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Update selectedSkills from URL query parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const skillsFromUrl = urlParams.getAll('skills');
    setSelectedSkills(skillsFromUrl);
  }, []);

  // Handle skill change and update URL query parameters
  const handleSkillsChange = (skillName: string, checked: boolean) => {
    const newSkills = checked
      ? [...selectedSkills, skillName]
      : selectedSkills.filter((skill) => skill !== skillName);

    setSelectedSkills(newSkills);

    const params = new URLSearchParams(window.location.search);
    params.delete('skills'); // Remove existing skills query params
    newSkills.forEach((skill) => params.append('skills', skill)); // Add new skills
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`
    );
  };

  return (
    <div className="filtersContainer">
      <div className="arrowAndTitle">
        <p className="title">SKILLS</p>
        <button onClick={() => setShowOptions(!showOptions)}>
          <img
            src={showOptions ? DownArrowIcon : UpArrowIcon}
            alt="toggle-arrow"
          />
        </button>
      </div>
      <div className="dividerLine"></div>
      {showOptions && (
        <div className="genresList">
          {skillsList.map((skill, index) => (
            <label htmlFor={`skills`} key={index}>
              <input
                type="checkbox"
                className="genreCheckbox"
                value={skill}
                checked={selectedSkills.includes(skill)}
                onChange={(e) => handleSkillsChange(skill, e.target.checked)}
                aria-labelledby={`tag-${skill}`}
              />
              {skill}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurCreatorsFilter;
