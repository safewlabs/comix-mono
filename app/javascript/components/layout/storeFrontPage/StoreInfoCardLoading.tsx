import '~/styles/shimmerLoader.scss';
import '~/styles/storeFrontPageStyles/storeFrontPageWebStyles.scss';

const StoreInfoCardLoading = () => {
  return (
    <div className="storeInfoCardWrapper">
      <div className="storeInfoCard">
        <div className="storeImageLoading shimmerLoader" />
        <div className="storeInfo">
          <div className="storeInfoTitleLoading shimmerLoader"></div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfoCardLoading;
