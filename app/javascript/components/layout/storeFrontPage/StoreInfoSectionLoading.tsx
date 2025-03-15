import StoreInfoCardLoading from './StoreInfoCardLoading';
import AboutUsSectionLoading from './AboutUsSectionLoading';
import SocialFeedLoading from './SocialFeedLoading';

const StoreInfoSectionLoading = () => {
  return (
    <div className="infoSectionWrapper">
      <StoreInfoCardLoading />
      <AboutUsSectionLoading />
      <SocialFeedLoading />
    </div>
  );
};

export default StoreInfoSectionLoading;
