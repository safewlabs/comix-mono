import SearchIcon from '../../../../assets/icons/search-icon.svg';
import '~/styles/headerStyles/headerMobile.scss';

const SearchIconComponent = () => {
  return (
    <button>
      <img src={SearchIcon} alt="search icon" className="searchIconMobile" />
    </button>
  );
};

export default SearchIconComponent;
