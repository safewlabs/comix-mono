import React from 'react';
import StackedCardsMobileScreen from '../forCreators/StackerCardsMobileScreen';
import AirtableForm from './AirtableForm';
import { TEXT } from './ForCreatorsPage';
import { FC } from 'react';
// import '@assets/stylesheets/newui/creatorsStyles/forCreatorsPageStyles.sass.scss';

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
