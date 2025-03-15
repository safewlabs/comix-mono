import TitleAndTaglineMobile from '~/components/common/TitleAndTaglineMobile';
import Button from '~/components/common/Button';
import '~/styles/creatorsStyles/creatorsMobile.scss';
import '~/styles/creatorsStyles/creators.scss';
import '~/styles/shimmerLoader.scss';

const dummyList = new Array(6).fill(null);

const CreatorsMobileLoading = () => {
  return (
    <div className="creatorsMobileWrapper">
      <TitleAndTaglineMobile
        title="CREATORS"
        tagline="Empowering Creators To Showcase, Sell, And Connect With Their Audience Like Never Before."
      />
      <div className="creatorsList">
        {dummyList.map((li, index) => (
          <div className="creatorImageNameAndTitle" key={index}>
            <div className="creatorImage shimmerLoader"></div>
            <div className="creatorSectionNameShimmerMobile shimmerLoader"></div>
            <div className="creatorSectionSkillsShimmerMobile shimmerLoader"></div>
          </div>
        ))}
      </div>
      <Button routeText={'/publish'} buttonText="JOIN US AS A CREATOR" />
    </div>
  );
};

export default CreatorsMobileLoading;
