import Tagline from '~/components/common/Tagline';
import TitleAndButtons from '~/components/common/TitleAndButtons';
import '~/styles/storesStyles/stores.scss';
import '~/styles/shimmerLoader.scss';

const dummyList = new Array(20).fill(null);

const StoresLoadingWeb = () => {
  return (
    <div className="storesWrapperOne">
      <div className="titleButtonsFour">
        <TitleAndButtons
          routeText={'/stores'}
          title={'STORES'}
          buttonText={'VIEW ALL'}
        />
      </div>
      <Tagline tagline={'Browse And Support Comics And Merchandise.'} />
      <div className="storesListOne">
        {dummyList.map((index) => (
          <div key={index}>
            <div className="storeCardShimmer shimmerLoader"></div>
            <div className="storeTitleShimmer shimmerLoader"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoresLoadingWeb;
