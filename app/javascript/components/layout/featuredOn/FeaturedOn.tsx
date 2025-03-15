import React, { FC } from 'react';
import ThreeMillionYearsImg from '@assets/featured/3-million-years.svg';
import GeekNetworkImg from '@assets/featured/geek-network.svg';
import IndieComicsZoneImg from '@assets/featured/indie-comics-zone.svg';
import SoloNerdBirdImg from '@assets/featured/solo-nerd-bird.svg';
import SpoilerCountyImg from '@assets/featured/spoiler-county.svg';
import WorldAtWarComicsImg from '@assets/featured/world-at-war-comics.svg';
import Tagline from '@javascript/components/common/Tagline';
import '@assets/stylesheets/newui/featuredOnStyles/featuredOn.sass.scss';

export const featuredOnDummyData = [
  {
    name: '3 MILLION YEARS',
    image: ThreeMillionYearsImg,
    url: 'https://comics.3millionyears.co.uk/p/spotlight-comix',
  },
  {
    name: 'GEEK NETWORK',
    image: GeekNetworkImg,
    url: 'https://geek-network.com/comix-comics-platform/',
  },
  {
    name: 'INDIE COMICS ZONE',
    image: IndieComicsZoneImg,
    url: 'https://indiecomicszone.com/interview-with-saurabh-bhatia-comix-one/',
  },
  {
    name: 'SOLO NERD BIRD',
    image: SoloNerdBirdImg,
    url: 'https://www.youtube.com/watch?v=Zt0pka6jboA',
  },
  {
    name: 'SPOILER COUNTY',
    image: SpoilerCountyImg,
    url: 'https://scpod.net/episodes/comixone-the-place-for-independent-comics',
  },
  {
    name: 'WORLD AT WAR',
    image: WorldAtWarComicsImg,
    url: 'https://www.youtube.com/watch?v=V4Rs0fcFdpY',
  },
];

const repeatData = (data: any[], repeatCount: number) => {
  return Array.from({ length: repeatCount }, () => data).flat();
};

const FeaturedOn: FC = () => {
  const marqueeData = repeatData(featuredOnDummyData, 10);

  return (
    <div className="featuredOnWrapper">
      <div className="title">FEATURED ON</div>
      <Tagline tagline={'Explore Comics Featured Across Various Platforms.'} />
      <div className="marquee">
        <div className="marqueeContent">
          {marqueeData.map((featured) => (
            <div
              key={crypto.randomUUID()}
              className="imageAndTitle"
              onClick={() => window.open(featured.url, '_blank')}
            >
              <img src={featured.image} alt={featured.name} className="image" />
              <p className="name">{featured.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
