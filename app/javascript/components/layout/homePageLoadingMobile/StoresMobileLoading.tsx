import TitleAndTaglineMobile from '~/components/common/TitleAndTaglineMobile';
import Button from '~/components/common/Button';
import '~/styles/storesStyles/storesMobile.scss';
import '~/styles/shimmerLoader.scss';
import '~/styles/storesStyles/stores.scss';

const dummyList = new Array(14).fill(null);

const StoresMobileLoading = () => {
  return (
    <div className="storesWrapperMobile">
      <TitleAndTaglineMobile
        title="STORES"
        tagline="Browse And Support Comics Merchandise."
      />
      <div className="storesListTwo">
        {dummyList.map((index) => (
          <div key={`${crypto.randomUUID()}`}>
            <div className="storeCard">
              <div className="storeImage shimmerLoader"></div>
              <div className="storeTitleShimmerLoader shimmerLoader"></div>
            </div>
          </div>
        ))}
      </div>
      <Button routeText={'/stores'} buttonText="VIEW ALL" />
    </div>
  );
};

export default StoresMobileLoading;
