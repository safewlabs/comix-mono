import TitleAndTaglineMobile from '~/components/common/TitleAndTaglineMobile';
import '~/styles/latestStyles/latestFromComix.scss';
import '~/styles/latestStyles/latestFromComixMobileStyles.scss';
import '~/styles/shimmerLoader.scss';
import Button from '~/components/common/Button';

const dummyList = new Array(3).fill(null);

const LatestFromComixMobileLoading = () => {
  return (
    <div className="latestComixMobileWrapper">
      <TitleAndTaglineMobile
        title="LATEST FROM COMIX"
        tagline="Explore Our Newest Articles, Interviews, And Updates From The Vibrant Universe Of Comix!"
      />
      <div className="cardGroupMobile">
        {dummyList.map((index) => (
          <div
            key={`${crypto.randomUUID()}`}
            className="latestFromComixCard shimmerLoader"
          ></div>
        ))}
      </div>
      <Button routeText={'/'} buttonText={'EXPLORE ALL'} />
    </div>
  );
};

export default LatestFromComixMobileLoading;
