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
  tagline: 'Womanual',
  url: 'https://women-on-rails.github.io',
  baseUrl: '/ressources/',
  projectName: 'ressources',
  organizationName: 'women-on-rails',
  favicon: 'img/favicon.ico',
  scripts: ['https://buttons.github.io/buttons.js'],
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
    navbar: {
      title: 'Women On Rails',
      logo: {
        alt: 'Women On Rails Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {to: 'help', label: 'À propos', position: 'left'},
        {
          href: 'https://www.meetup.com/fr-FR/Women-On-Rails/',
          label: 'Meet-up',
          position: 'left',
        },
        {
          href: 'https://twitter.com/womenonrails',
          label: 'Twitter',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
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
      copyright: `Copyright © ${new Date().getFullYear()} Women On Rails. Réalisé avec Docusaurus.`,
    },
    sidebarCollapsible: true,
  },
};

module.exports = siteConfig;
