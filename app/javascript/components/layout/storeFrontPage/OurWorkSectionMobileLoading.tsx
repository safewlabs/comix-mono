import '~/styles/comicsPageStyles/comicsPageMobile.scss';
import '~/styles/shimmerLoader.scss';

const dummyList = new Array(6).fill(null);

const OurWorkSectionMobileLoading = () => {
  return (
    <div className="ourWorkSectionMobileWrapper">
      <div className="ourWorkMobileTitle">OUR WORK</div>
      <div className="ourWorkListMobileWrapper">
        {dummyList.map((index) => (
          <div
            className="newReleaseCardMobile"
            key={`${index}-${crypto.randomUUID()}`}
          >
            <img className="comicImageShimmerMobile shimmerLoader" />
            <p className="comicMobileNameLoading shimmerLoader"></p>
            <p className="comicMobileStoreLoading shimmerLoader"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkSectionMobileLoading;
