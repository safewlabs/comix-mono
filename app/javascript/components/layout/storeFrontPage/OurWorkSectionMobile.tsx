import { FC } from 'react';
import { storePageData } from '~/utils/dummyData/storePageData';
import '~/styles/storeFrontPageStyles/storeFrontPageMobileStyles.scss';
import ComicsPageCardMobile from '../comicsPage/ComicsPageCardMobile';

const OurWorkSectionMobile: FC = () => {
  const ourWorkBooksList = storePageData.data.products;

  return (
    <div className="ourWorkSectionMobileWrapper">
      <div className="ourWorkMobileTitle">OUR WORK</div>
      <div className="ourWorkListMobileWrapper">
        {ourWorkBooksList.slice(0, 6).map((listItem, index) => (
          <div key={`${crypto.randomUUID()}-${index}`}>
            <ComicsPageCardMobile index={index} comicData={listItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkSectionMobile;
