import StackedCards from '../forCreators/StackedCards';
import AirtableForm from './AirtableForm';
import '~/styles/creatorsStyles/forCreatorsPageStyles.scss';

export const TEXT =
  "At this point, we're only accepting Indie cretors and small press that have a back-catalogue and new projects planned this year. Please fill out the form below and we will be in touch asap to get you onboard!";

const ForCreatorsPage = () => {
  return (
    <div className="forCreatorsPageLayoutWrapper">
      <p className="forCreatorsPageTitle">FOR CREATORS</p>
      <StackedCards />
      <p className="forCreatorsPageText">{TEXT.toUpperCase()}</p>
      <AirtableForm />
    </div>
  );
};

export default ForCreatorsPage;
