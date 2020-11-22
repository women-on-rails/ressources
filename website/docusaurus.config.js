/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Women On Rails',
  tagline: "Pour préparer tes entretiens d'embauche, progresser en Ruby et son framework Rails et rejoindre une communauté bienveillante pour coder ensemble.",
  url: 'https://women-on-rails.github.io',
  baseUrl: '/ressources/',
  projectName: 'ressources',
  organizationName: 'women-on-rails',
  favicon: 'img/favicon.ico',
  scripts: ['https://buttons.github.io/buttons.js'],
  plugins: ['@docusaurus/plugin-google-gtag'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./src/sidebars.js'),
          path: 'docs',
          editUrl: 'https://github.com/women-on-rails/ressources/edit/master/website/',
          routeBasePath: 'docs',
          remarkPlugins: [],
          rehypePlugins: [],
          showLastUpdateTime: true,
        },
      },
    ],
  ],

  themeConfig: {
    gtag: {
      trackingID: 'G-F601H524WJ',
      anonymizeIP: true,
    },
    navbar: {
      title: 'Women On Rails',
      logo: {
        alt: 'Women On Rails Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {to: 'docs', label: 'Ressources', position: 'right'},
        {
          href: 'https://github.com/women-on-rails/ressources',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
  
    blog: {
      postsPerPage: 10,
    },

    footer: {
      links: [
        {
          title: 'Nos ressources',
          items: [
            {
              label: 'Introduction',
              to: '/docs',
            },
            {
              label: 'Comment contribuer',
              to: '/docs/comment-contribuer',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/women-on-rails/ressources',
            }
          ],
        },
        {
          title: 'Le réseau',
          items: [
            {
              label: 'Qui sommes-nous ?',
              to: 'help',
            }
          ],
        },
        {
          title: 'Nos publications',
          items: [
            {
              label: 'Newsletter',
              to: 'newsletter',
            },
            {
              label: 'Blog',
              to: 'blog',
            }
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/womenonrails',
            },
            {
              label: 'Meet-up',
              href: 'https://www.meetup.com/fr-FR/Women-On-Rails/',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Women On Rails. Réalisé avec Docusaurus.`,
    },
    sidebarCollapsible: true,
  },
};

module.exports = siteConfig;
