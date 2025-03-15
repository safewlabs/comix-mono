import { FC } from 'react';
import subscribeIcon from '../../../../assets/icons/subscribe-container.svg';
import '~/styles/footerStyles/footer.scss';

const FooterNewsletterSignup: FC = () => {
  return (
    <div className="newsletterSignup">
      <div className="newsLetterSignupTitle">Newsletter</div>
      <div className="newsLetterSignupTagline">
        Stay Updated on Indie Comics!
      </div>
      <form className="inputAndButton">
        <input
          type="text"
          placeholder="Enter your email address"
          className="newsletterInput"
        />
        <button className="newsletterButton">Subscribe</button>
      </form>
      <img src={subscribeIcon} alt="subscribe-icon" className="subscribeIcon" />
    </div>
  );
};

export default FooterNewsletterSignup;
