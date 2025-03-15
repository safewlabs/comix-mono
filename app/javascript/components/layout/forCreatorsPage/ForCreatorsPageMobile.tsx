import StackedCardsMobileScreen from '../forCreators/StackerCardsMobileScreen';
import '~/styles/creatorsStyles/forCreatorsPageStyles.scss';
import AirtableForm from './AirtableForm';
import { TEXT } from './ForCreatorsPage';
import { FC } from 'react';

const ForCreatorsPageMobile: FC = () => {
  return (
    <div className="forCreatorsPageLayoutWrapper">
      <p className="forCreatorsPageTitle">FOR CREATORS</p>
      <StackedCardsMobileScreen />
      <p className="forCreatorsPageText">{TEXT.toUpperCase()}</p>
      <AirtableForm />
    </div>
  );
};

export default ForCreatorsPageMobile;
