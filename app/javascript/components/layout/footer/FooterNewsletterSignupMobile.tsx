import React from 'react';
import subscribeIcon from '@assets/icons/subscribe-container.svg';
import '@assets/stylesheets/newui/footerStyles/footerMobile.sass.scss';

const FooterNewsletterSignupMobile = () => {
  return (
    <div className="newsletterSignupMobile">
      <div className="newsLetterSignupTitleMobile">Newsletter</div>
      <div className="newsLetterSignupTaglineMobile">
        Stay Updated on Indie Comics!
      </div>
      <form className="inputAndButtonMobile">
        <input
          type="text"
          placeholder="Enter your email address"
          className="newsletterInputMobile"
        />
        <button className="newsletterButtonMobile">Subscribe</button>
      </form>
      <img
        src={subscribeIcon}
        alt="subscribe-icon"
        className="subscribeIconMobile"
      />
    </div>
  );
};

export default FooterNewsletterSignupMobile;
