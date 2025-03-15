import { storePageData } from '~/utils/dummyData/storePageData';

const StoreInfoCard = () => {
  return (
    <div className="storeInfoCardWrapper">
      <div className="storeInfoCard">
        <img
          src={`https://www.comix.one${storePageData.data.display_image}`}
          alt="Store Image"
          className="storeImage"
        />
        <div className="storeInfo">
          <div className="storeInfoTitle">
            {storePageData.data.name.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfoCard;
