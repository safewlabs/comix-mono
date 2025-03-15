import HamburgerMenu from './HamburgerMenu';
import SearchIconComponent from './SearchIcon';
import ComixHeaderMobileLogo from './ComixHeaderMobileLogo';
import '~/styles/headerStyles/headerMobile.scss';

const HeaderMobile = () => {
  return (
    <div className="headerMobileParent">
      <ComixHeaderMobileLogo />
      <div className="headerMobileRightSideContent">
        <SearchIconComponent />
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default HeaderMobile;
