import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'RubyCDP',
  tagline: 'High-level API to control Chrome in Ruby',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.rubycdp.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rubycdp', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ferrum-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'RubyCDP',
      logo: {
        alt: 'Ferrum Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/rubycdp/ferrum',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/ferrum/introduction',
            },
            {
              label: 'API Reference',
              to: '/docs/api/navigation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/rubycdp/ferrum',
            },
            {
              label: 'Issues',
              href: 'https://github.com/rubycdp/ferrum/issues',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Ferrum',
              href: 'https://github.com/rubycdp/ferrum',
            },
            {
              label: 'Cuprite',
              href: 'https://github.com/rubycdp/cuprite',
            },
            {
              label: 'Vessel',
              href: 'https://github.com/rubycdp/vessel',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. RubyCDP`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['ruby', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
