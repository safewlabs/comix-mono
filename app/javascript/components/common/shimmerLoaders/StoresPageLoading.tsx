import Header from '~/components/layout/header/Header';
import SortingBarLoading from './SortingBarLoading';
import AppMarketing from '~/components/layout/appMarketing/AppMarketing';
import Footer from '~/components/layout/footer/Footer';
import StoresPageListLoading from './StoresPageListLoading';

const StoresPageLoading = () => {
  return (
    <>
      <Header />
      <SortingBarLoading title="STORES" />
      <StoresPageListLoading />
      <AppMarketing />
      <Footer />
    </>
  );
};

export default StoresPageLoading;
