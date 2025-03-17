import React from 'react';
import FooterLogoAndTagline from './FooterLogoAndTagline';
import FooterBottomContent from './FooterBottomContent';
import FooterNewsletterSignupMobile from './FooterNewsletterSignupMobile';
// import '@assets/stylesheets/newui/footerStyles/footerMobile.sass.scss';

interface Link {
  href: string;
  text: string;
  target?: string;
  rel: string;
}

interface LinkGroupProps {
  title: string;
  links: Link[];
}

const LinkGroup: React.FC<LinkGroupProps> = ({ title, links }) => (
  <div className="groupOfLinks">
    <p>{title}</p>
    {links.map((link) => (
      <a key={link.href} href={link.href} target={link.target} rel={link.rel}>
        {link.text}
      </a>
    ))}
  </div>
);

const FooterMobile: React.FC = () => {
  const discoverLinks: Link[] = [
    {
      href: 'https://www.comix.one/comics',
      rel: 'browse-comics-link',
      text: 'Browse Comics',
    },
    {
      href: 'https://www.comix.one/for-creators',
      rel: 'for-creators-link',
      text: 'For Creators',
    },
  ];

  const aboutLinks: Link[] = [
    {
      href: 'https://www.comix.one/about',
      rel: 'our-story-link',
      text: 'Our Story',
    },
    { href: 'https://www.comix.one/posts', rel: 'blog-link', text: 'Blog' },
    {
      href: 'mailto:contact@comix.one',
      target: '_blank',
      rel: 'contact-link',
      text: 'Contact',
    },
    { href: 'https://comix.instatus.com/', rel: 'status-link', text: 'Status' },
  ];

  const supportLinks: Link[] = [
    {
      href: 'mailto:contact@comix.one',
      target: '_blank',
      rel: 'contact-link',
      text: 'Help',
    },
    {
      href: 'https://winter-professor-81d.notion.site/Privacy-Policy-1ec85eb827a940b39654db9d3e4847e1',
      target: '_blank',
      rel: 'privacy-policy-link',
      text: 'Privacy Policy',
    },
    {
      href: 'https://winter-professor-81d.notion.site/Terms-of-Service-7a40080fe1684689890e287566f0c732',
      target: '_blank',
      rel: 'terms-of-service-link',
      text: 'Terms Of Service',
    },
  ];

  return (
    <>
      <div className="footerWrapperMobile">
        <div className="footerContentWrapperMobile">
          <FooterLogoAndTagline />
          <LinkGroup title="DISCOVER" links={discoverLinks} />
          <LinkGroup title="ABOUT" links={aboutLinks} />
          <LinkGroup title="SUPPORT" links={supportLinks} />
          <FooterNewsletterSignupMobile />
        </div>
      </div>
      <FooterBottomContent />
    </>
  );
};

export default FooterMobile;
