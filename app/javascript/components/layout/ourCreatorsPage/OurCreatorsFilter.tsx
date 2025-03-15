import { useState } from 'react';
import DownArrowIcon from '../../../../assets/icons/down-arrow-icon-2.svg';
import UpArrowIcon from '../../../../assets/icons/up-arrow-icon.svg';
import { useSearchParams } from '@remix-run/react';
import '~/styles/filtersStyles.scss';

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
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSkillsChange = (skillName: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    const currentSkills = params.getAll('skills');
    params.delete('skills');
    const newSkills = checked
      ? [...currentSkills, skillName]
      : currentSkills.filter((skill) => skill !== skillName);
    newSkills.forEach((skill) => params.append('skills', skill));
    setSearchParams(params, { replace: true });
  };

  return (
    <div className="filtersContainer">
      <div className="arrowAndTitle">
        <p className="title">SKILLS</p>
        <button onClick={() => setShowOptions(!showOptions)}>
          <img
            src={showOptions ? DownArrowIcon : UpArrowIcon}
            alt="down-arrow-icon"
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
                checked={searchParams.getAll('tags').includes(skill)}
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
