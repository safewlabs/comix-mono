import React, { useState, useEffect } from 'react';
import RangeSlider from 'react-range-slider-input';
import DownArrowIcon from '@assets/icons/down-arrow-icon-2.svg';
import UpArrowIcon from '@assets/icons/up-arrow-icon.svg';
import 'react-range-slider-input/dist/style.css';
import '@assets/stylesheets/newui/sliderStyles.sass.scss';
import '@assets/stylesheets/newui/filtersStyles.sass.scss';

type GenreObj = {
  cover?: string;
  name: string;
  slug: string;
};

// Mock Data for exploreByGenres (you can fetch this from your API or a file)
const exploreByGenres: GenreObj[] = [
  { name: 'Artist', slug: 'artist' },
  { name: 'Cover Artist', slug: 'cover-artist' },
  { name: 'Writer', slug: 'writer' },
  { name: 'Editor', slug: 'editor' },
  // Add more genres here
];

const ComicsPageFilters: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([1, 100]);
  const [ageRange, setAgeRange] = useState<[number, number]>([12, 100]);
  const [showOptions, setShowOptions] = useState<boolean>(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Sync state with query params on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const priceMin = urlParams.get('minPrice');
    const priceMax = urlParams.get('maxPrice');
    const ageMin = urlParams.get('minAge');
    const ageMax = urlParams.get('maxAge');
    const tags = urlParams.getAll('tags');

    if (priceMin && priceMax) {
      setPriceRange([parseInt(priceMin), parseInt(priceMax)]);
    }
    if (ageMin && ageMax) {
      setAgeRange([parseInt(ageMin), parseInt(ageMax)]);
    }
    setSelectedTags(tags);
  }, []);

  // Handle price range change
  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setPriceRange([value[0], value[1]]);
    }
  };

  // Handle age range change
  const handleAgeChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setAgeRange([value[0], value[1]]);
    }
  };

  // Apply price filter
  const handlePriceApply = () => {
    const params = new URLSearchParams(window.location.search);
    params.set('minPrice', priceRange[0].toString());
    params.set('maxPrice', priceRange[1].toString());
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  // Apply age filter
  const handleAgeApply = () => {
    const params = new URLSearchParams(window.location.search);
    params.set('minAge', ageRange[0].toString());
    params.set('maxAge', ageRange[1].toString());
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  // Handle tags change (checkbox selection)
  const handleTagChange = (tagName: string, checked: boolean) => {
    const newTags = checked
      ? [...selectedTags, tagName]
      : selectedTags.filter((tag) => tag !== tagName);

    setSelectedTags(newTags);

    const params = new URLSearchParams(window.location.search);
    params.delete('tags'); // Remove existing tags query params
    newTags.forEach((tag) => params.append('tags', tag)); // Add new tags
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="filtersContainer">
      {/* Price Filter */}
      <p className="title" id="priceFilter">
        PRICE
      </p>
      <div className="rangeAndButton">
        <div className="range">
          <p aria-live="polite">${priceRange[0]}</p>
          <p>-</p>
          <p aria-live="polite">${priceRange[1]}</p>
        </div>
        <button
          className="applyButton"
          onClick={handlePriceApply}
          aria-labelledby="priceFilter applyPrice"
        >
          APPLY
        </button>
      </div>
      <div className="sliderWrapper">
        <RangeSlider
          min={1}
          max={100}
          value={priceRange}
          onInput={handlePriceChange}
          aria-label="Price range slider"
          aria-valuemin={1}
          aria-valuemax={100}
          aria-valuenow={priceRange[0]}
        />
      </div>
      <div className="dividerLine"></div>

      {/* Age Filter */}
      <p className="title" id="ageFilter">
        AGE
      </p>
      <div className="rangeAndButton">
        <div className="range">
          <p aria-live="polite">{ageRange[0]}</p>
          <p>-</p>
          <p aria-live="polite">{ageRange[1]}</p>
        </div>
        <button
          className="applyButton"
          onClick={handleAgeApply}
          aria-labelledby="ageFilter applyAge"
        >
          APPLY
        </button>
      </div>
      <div className="sliderWrapper">
        <RangeSlider
          min={12}
          max={100}
          value={ageRange}
          onInput={handleAgeChange}
          aria-label="Age range slider"
          aria-valuemin={12}
          aria-valuemax={100}
          aria-valuenow={ageRange[0]}
        />
      </div>
      <div className="dividerLine"></div>

      {/* Tags Filter */}
      <div className="arrowAndTitle">
        <p className="title" id="tagsFilter">
          TAGS
        </p>
        <button
          onClick={() => setShowOptions(!showOptions)}
          aria-expanded={showOptions}
          aria-controls="tagsOptions"
        >
          <img
            src={showOptions ? DownArrowIcon : UpArrowIcon}
            alt={showOptions ? 'Collapse tags options' : 'Expand tags options'}
          />
        </button>
      </div>
      <div className="dividerLine"></div>
      {showOptions && (
        <>
          <div className="genresList" id="tagsOptions">
            {exploreByGenres.map((genre: GenreObj, index: number) => (
              <label htmlFor={`${genre.name}`} key={index}>
                <input
                  type="checkbox"
                  className="genreCheckbox"
                  value={genre.name}
                  checked={selectedTags.includes(genre.name)}
                  onChange={(e) =>
                    handleTagChange(genre.name, e.target.checked)
                  }
                  aria-labelledby={`tag-${genre.name}`}
                />
                {genre.name}
              </label>
            ))}
          </div>
          <div className="dividerLine"></div>
        </>
      )}
    </div>
  );
};

export default ComicsPageFilters;
