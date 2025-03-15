import React, { FC } from 'react';
import '@assets/stylesheets/newui/footerStyles/footer.sass.scss';
import ComixLogo from '@assets/logos/Comix Logo.svg';
import xIcon from '@assets/icons/x-icon.svg';
import ytIcon from '@assets/icons/youtube-icon.svg';
import blogIcon from '@assets/icons/blog-icon.svg';
import githubIcon from '@assets/icons/github-icon.svg';
import blueSkyIcon from '@assets/icons/bluesky-icon.svg';
import igIcon from '@assets/icons/instagram-icon.png';

const footerTagline =
  'A Hub For Indie Comic Creators And Fans. Explore Stories, Discover New Artists, And Join a Vibrant Community.';

const socialLinks = [
  {
    src: xIcon,
    alt: 'x-social-link',
    href: 'https://x.com/i/flow/login?redirect_after_login=%2Fcomix_app',
  },
  {
    src: ytIcon,
    alt: 'youtube-social-link',
    href: 'https://www.youtube.com/@comix_app',
  },
  {
    src: igIcon,
    alt: 'instagram-social-link',
    href: 'https://www.instagram.com/comix_app',
  },
  {
    src: blogIcon,
    alt: 'blog-social-link',
    href: 'https://one.us16.list-manage.com/subscribe?u=aa6a911f9e2c75faf3321800b&id=200196b305',
  },
  {
    src: githubIcon,
    alt: 'github-social-link',
    href: 'https://github.com/safewlabs/comix-mono',
  },
  {
    src: blueSkyIcon,
    alt: 'bluesky-social-link',
    href: 'https://bsky.app/profile/comix.bsky.social',
  },
];

const SocialIcon: FC<{ src: string; alt: string; href: string }> = ({
  src,
  alt,
  href,
}) => (
  <a href={href} target="_blank">
    <img className="socialIcon" src={src} alt={alt} />
  </a>
);

const FooterLogoAndTagline = () => {
  return (
    <div className="comixFooterLogoAndTagline">
      <img src={ComixLogo} alt="Comix Logo" className="footerLogo" />
      <p className="footerTagline">{footerTagline}</p>
      <div className="footerSocialsWrapper">
        <p className="followUsText">FOLLOW US</p>
        <div className="footerSocialsIcons">
          {socialLinks.map((link, index) => (
            <SocialIcon
              key={index}
              src={link.src}
              alt={link.alt}
              href={link.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLogoAndTagline;
