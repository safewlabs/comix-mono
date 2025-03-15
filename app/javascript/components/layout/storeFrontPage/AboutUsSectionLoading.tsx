import '~/styles/shimmerLoader.scss';
import '~/styles/storeFrontPageStyles/storeFrontPageWebStyles.scss';

const AboutUsSectionLoading = () => {
  return (
    <div className="aboutUsWrapper">
      <div className="aboutUsTitle">ABOUT US</div>
      <div className="aboutUsDescriptionLoading shimmerLoader"></div>
    </div>
  );
};

export default AboutUsSectionLoading;
