import { FC } from 'react';
import Tagline from '~/components/common/Tagline';
import TitleAndButtons from '~/components/common/TitleAndButtons';
import latestDummy1 from '../../../../assets/latestFromComix/latest-from-comix-1.svg';
import latestDummy2 from '../../../../assets/latestFromComix/latest-from-comix-2.svg';
import latestDummy3 from '../../../../assets/latestFromComix/latest-from-comix-3.svg';
import tagIcon from '../../../../assets/icons/tag-icon.svg';
import parse from 'html-react-parser';
import '~/styles/latestStyles/latestFromComix.scss';

export const latestFromComixDummyImages = [
  latestDummy1,
  latestDummy2,
  latestDummy3,
];
export interface LatestPost {
  title: string;
  article_type: string;
  summary: string;
  slug: string;
  created_at: string;
}

export interface LatestFromComixProps {
  latestFromComix: LatestPost[];
}

const LatestFromComix: FC<LatestFromComixProps> = ({ latestFromComix }) => {
  return (
    <div className="latestFromComixWrapper">
      <div className="titleButtons">
        <TitleAndButtons
          routeText={'/'}
          title={'LATEST FROM COMIX'}
          buttonText={'EXPLORE ALL'}
        />
      </div>
      <Tagline
        tagline={
          'Explore Our Newest Articles, Interviews, And Updates From The Vibrant Universe Of Comix!'
        }
      />
      <div className="latestFromComixList">
        {latestFromComix.slice(0, 3).map((latest, index) => (
          <div
            className="latestFromComixCard"
            key={`${index}-${crypto.randomUUID()}`}
          >
            <img
              className="latestFromComixCardImage"
              src={latestFromComixDummyImages[index]}
              alt={`Article image for ${latest.title}`}
            />
            <div className="latestFromComixCardInfo">
              <div className="latestFromComixIconAndArticleType">
                <img src={tagIcon} alt="Tag icon" className="articleTypeIcon" />
                <p className="articleTypeTitle">
                  {`${latest.article_type.slice(0, 1).toUpperCase()}${latest.article_type.slice(1)}`}
                </p>
              </div>
              <div className="latestArticleTitle">
                {latest.title.toUpperCase()}
              </div>
              <div className="latestArticleSummary">
                <span>{parse(`${latest.summary.substring(0, 100)}...`)}</span>
                <a
                  href={`https://www.comix.one/posts/${latest.slug}`}
                  aria-label={`Read more about ${latest.title}`}
                >
                  <button
                    aria-label={`Read full article titled ${latest.title}`}
                  >
                    Read more
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestFromComix;
