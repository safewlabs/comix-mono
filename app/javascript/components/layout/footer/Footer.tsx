import { FC } from 'react';
import FooterLogoAndTagline from './FooterLogoAndTagline';
import FooterNewsletterSignup from './FooterNewsletterSignup';
import FooterTable from './FooterTable';
import FooterBottomContent from './FooterBottomContent';
import '~/styles/footerStyles/footer.scss';

const Footer: FC = () => {
  return (
    <div className="footerWrapper">
      <div className="footerTopContentWrapper">
        <FooterLogoAndTagline />
        <FooterTable />
        <FooterNewsletterSignup />
      </div>
      <div className="footerBottomContentWrapper">
        <FooterBottomContent />
      </div>
    </div>
  );
};

export default Footer;
