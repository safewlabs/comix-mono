import { FC } from 'react';
import AboutUsSection from './AboutUsSection';
import SocialFeed from './SocialFeed';
import StoreInfoCard from './StoreInfoCard';

type StoreInfoSectionProps = {
  description: string;
};
const StoreInfoSection: FC<StoreInfoSectionProps> = ({ description }) => {
  return (
    <div className="infoSectionWrapper">
      <StoreInfoCard />
      <AboutUsSection description={description} />
      <SocialFeed />
    </div>
  );
};

export default StoreInfoSection;
