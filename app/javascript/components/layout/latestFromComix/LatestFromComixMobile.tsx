import { FC } from 'react';
import TitleAndTaglineMobile from '~/components/common/TitleAndTaglineMobile';
import { LatestFromComixProps } from './LatestFromComix';
import { latestFromComixDummyImages } from './LatestFromComix';
import tagIcon from '../../../../assets/icons/tag-icon.svg';
import parse from 'html-react-parser';
import '~/styles/latestStyles/latestFromComix.scss';
import '~/styles/latestStyles/latestFromComixMobileStyles.scss';
import Button from '~/components/common/Button';

const LatestFromComixMobile: FC<LatestFromComixProps> = ({
  latestFromComix,
}) => {
  return (
    <div className="latestComixMobileWrapper">
      <TitleAndTaglineMobile
        title="LATEST FROM COMIX"
        tagline="Explore Our Newest Articles, Interviews, And Updates From The Vibrant Universe Of Comix!"
      />
      <div className="cardGroupMobile">
        {latestFromComix.slice(0, 3).map((latest, index) => (
          <div
            className="latestFromComixCard"
            key={`${crypto.randomUUID()}-${index}`}
          >
            <img
              className="latestFromComixCardImage"
              src={latestFromComixDummyImages[index]}
              alt={`Image for article titled ${latest.title}`}
            />
            <div className="latestFromComixCardInfo">
              <div className="latestFromComixIconAndArticleType">
                <img
                  src={tagIcon}
                  alt="Icon representing article type"
                  className="articleTypeIcon"
                />
                <p className="articleTypeTitle">
                  {`${latest.article_type.slice(0, 1).toUpperCase()}${latest.article_type.slice(1)}`}
                </p>
              </div>
              <div className="latestArticleTitle">
                {latest.title.toUpperCase()}
              </div>
              <div className="latestArticleSummary">
                <span>{parse(`${latest.summary.substring(0, 100)}...`)}</span>
                <button
                  onClick={() =>
                    (window.location.href = `https://www.comix.one/posts/${latest.slug}`)
                  }
                  aria-label={`Read full article titled ${latest.title}`}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button routeText={'/'} buttonText={'EXPLORE ALL'} />
    </div>
  );
};

export default LatestFromComixMobile;
