import React from 'react';
import StoryBackground from '@assets/background/our-story-story-background.svg';
import OurMissionImage from '@assets/background/our-mission-image.svg';
import '@assets/stylesheets/newui/ourStoryStyles.scss';

const OurStoryPageLayout = () => {
  return (
    <>
      <div className="ourStoryPageLayoutWrapper">
        <div className="imageAndStoryWrapper1">
          <img src={StoryBackground} alt="our story"></img>
          <div className="storyWrapper">
            <h1 className="ourStoryHeading">OUR STORY</h1>
            <p className="ourStoryContent">
              We Are A Platform For The Creators And By The Creators.
            </p>
            <p className="ourStoryContent">
              In 2017, I Was Working On My First Comic, Which Was Part Of An
              Anthology.
            </p>
            <p className="ourStoryContent">
              While It Was A Great Time, Closely Looking At How Kickstarter
              Worked Made Me Realise How Flawed The Whole Process Is.
            </p>
            <p className="ourStoryContent">
              That Was The Genesis Of The Idea For Comix. Not Only Did I See
              Deficiencies In The Current Process Of How Comics Are Brought To
              Life, I Saw A Lot Of Ways In Which The Community As A Whole Could
              Benefit From Some New Tools.
            </p>
          </div>
        </div>
        <div className="imageAndStoryWrapper2">
          <img
            src={OurMissionImage}
            alt="our-mission-image"
            className="ourMissionImage"
          />
          <div className="ourMissionContent">
            <h1 className="heading">OUR MISSION</h1>
            <ul className="bulletPoints">
              <li>
                We Will Always Remain An Exclusive Platform For The Indie
                Community.
              </li>
              <li>
                We Want The Indie Creators To Be In Control Of Their Own
                Destiny!
              </li>
              <li>
                We Want To Build Powerful Tools For Indie Creators And Fans
                Alike.
              </li>
              <li>Become An End-To-End Ecosystem For Indie Comics!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="howWereDifferentWrapper">
        <div className="howWereDifferentText">
          <h1 className="howWereDifferentHeading">HOW WE'RE DIFFERENT</h1>
          <p className="howWereDifferentPara">
            We're Bringing Some Fresh Thought Into How The Indie Comics Will Go
            Into The Next Generation. No, We're Not Talking About The NFTs Or
            Blockchains, We're Not Into Any Of Those Things. Started By An Indie
            Creator, We Have Walked A Mile In The Creators Shoes. We Have Great
            Empathy For Our Creators And Will Always Keep Them First. We're
            Because Of Them And Not The Other Way Round.
          </p>
          <p className="howWereDifferentPara">
            Though We Are Based In Australia, We Have A Global Outlook And
            Welcome Everyone From Around The Globe On Our Platform.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurStoryPageLayout;
