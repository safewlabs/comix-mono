import '~/styles/shimmerLoader.scss';
import '~/styles/creatorsStyles/forCreatorsPageStyles.scss';

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
