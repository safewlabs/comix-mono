import React, { useState } from 'react';
import { loader } from '~/routes/comics/route';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import RangeSlider from 'react-range-slider-input';
import DownArrowIcon from '../../../../assets/icons/down-arrow-icon-2.svg';
import UpArrowIcon from '../../../../assets/icons/up-arrow-icon.svg';
import 'react-range-slider-input/dist/style.css';
import '~/styles/sliderStyles.scss';
import '~/styles/filtersStyles.scss';

type GenreObj = {
  cover?: string;
  name: string;
  slug: string;
};

const ComicsPageFilters: React.FC = () => {
  const { exploreByGenres } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState<[number, number]>([1, 100]);
  const [ageRange, setAgeRange] = useState<[number, number]>([12, 100]);
  const [showOptions, setShowOptions] = useState<boolean>(true);

  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setPriceRange([value[0], value[1]]);
    }
  };

  const handleAgeChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setAgeRange([value[0], value[1]]);
    }
  };

  const handlePriceApply = () => {
    const params = new URLSearchParams(searchParams);
    params.set('minPrice', priceRange[0].toString());
    params.set('maxPrice', priceRange[1].toString());
    setSearchParams(params, { replace: true });
  };

  const handleAgeApply = () => {
    const params = new URLSearchParams(searchParams);
    params.set('minAge', ageRange[0].toString());
    params.set('maxAge', ageRange[1].toString());
    setSearchParams(params, { replace: true });
  };

  const handleTagChange = (tagName: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams);
    const currentTags = params.getAll('tags');
    params.delete('tags');
    const newTags = checked
      ? [...currentTags, tagName]
      : currentTags.filter((tag) => tag !== tagName);

    newTags.forEach((tag) => params.append('tags', tag));
    setSearchParams(params, { replace: true });
  };

  return (
    <div className="filtersContainer">
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
                  checked={searchParams.getAll('tags').includes(genre.name)}
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
