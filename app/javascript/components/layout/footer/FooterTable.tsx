import React, { FC } from 'react';
import '@assets/stylesheets/newui/footerStyles/footer.sass.scss';

interface Link {
  href: string;
  text: string;
  target?: string;
  rel: string;
}

interface TableRow {
  discover: Link;
  about: Link;
  support: Link;
}

const FooterTable: FC = () => {
  const rows: TableRow[] = [
    {
      discover: {
        href: 'https://www.comix.one/comics',
        text: 'Browse Comics',
        rel: 'browse-comics-link',
      },
      about: {
        href: '/ourstory',
        text: 'Our Story',
        rel: 'our-story-link',
      },
      support: {
        href: 'https://airtable.com/appjqYeyd9z8jn50Z/shrJzkC0Vxbt2fbUS',
        text: 'Support',
        target: '_blank',
        rel: 'support-link',
      },
    },
    {
      discover: {
        href: 'https://www.comix.one/for-creators',
        text: 'Our Creators',
        rel: 'for-creators-link',
      },
      about: {
        href: 'https://www.comix.one/posts',
        text: 'Blog',
        rel: 'blog-link',
      },
      support: {
        href: 'https://winter-professor-81d.notion.site/Privacy-Policy-1ec85eb827a940b39654db9d3e4847e1',
        text: 'Privacy Policy',
        target: '_blank',
        rel: 'privacy-policy-link',
      },
    },
    {
      discover: { href: '', text: '', rel: '' }, // Empty for this row
      about: {
        href: 'mailto:contact@comix.one',
        text: 'Contact',
        target: '_blank',
        rel: 'contact-link',
      },
      support: {
        href: 'https://winter-professor-81d.notion.site/Terms-of-Service-7a40080fe1684689890e287566f0c732',
        text: 'Terms of Service',
        target: '_blank',
        rel: 'terms-of-service-link',
      },
    },
    {
      discover: { href: '', text: '', rel: '' }, // Empty for this row
      about: {
        href: 'https://comix.instatus.com/',
        text: 'Status',
        rel: 'status-link',
      },
      support: { href: '', text: '', rel: '' }, // Empty for this row
    },
  ];

  return (
    <div className="footerLinksTable">
      <table>
        <thead>
          <tr>
            <th>DISCOVER</th>
            <th>ABOUT</th>
            <th>SUPPORT</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                {row.discover.href && (
                  <a
                    href={row.discover.href}
                    target={row.discover.target}
                    rel={row.discover.rel}
                  >
                    {row.discover.text}
                  </a>
                )}
              </td>
              <td>
                {row.about.href && (
                  <a
                    href={row.about.href}
                    target={row.about.target}
                    rel={row.about.rel}
                  >
                    {row.about.text}
                  </a>
                )}
              </td>
              <td>
                {row.support.href && (
                  <a
                    href={row.support.href}
                    target={row.support.target}
                    rel={row.support.rel}
                  >
                    {row.support.text}
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FooterTable;
