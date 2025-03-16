import React from 'react';
// import '@assets/stylesheets/newui/shimmerLoader.sass.scss';
// import '@assets/stylesheets/newui/creatorsStyles/forCreatorsPageStyles.sass.scss';

const AirtableForm = () => {
  return (
    <div className="airtableEmbedWrapper">
      <iframe
        className="airtableEmbed shimmerLoader"
        src="https://airtable.com/embed/shrDp4z8uPE4qBXb1?backgroundColor=purple"
        frame-border="0"
      ></iframe>
    </div>
  );
};

export default AirtableForm;
