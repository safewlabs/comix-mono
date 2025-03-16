import React, { FC } from 'react';
// import '@assets/stylesheets/newui/footerStyles/footer.sass.scss';

const FooterBottomContent: FC = () => {
  return (
    <div className="footerBottomContent">
      <div className="footerBottomFlexRowText">
        <div className="mainColorText">&copy; Comix All Rights Reserved.</div>
        <div className="whiteText"> Comix Pty Ltd.</div>
      </div>
      <div className="mainColorText">
        We’d like to acknowledge the traditional owners of the land and pay our
        respects to elders past and present.
      </div>
    </div>
  );
};

export default FooterBottomContent;
