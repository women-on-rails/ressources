/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Women On Rails', // Title for your website.
  tagline: 'Ressources',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'test-site',
  organizationName: 'facebook',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  /* path to images for favicon */
  favicon: 'img/favicon.ico',

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.json'),
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
        {to: 'docs/doc1', label: 'Ressources', position: 'left'},
        {to: 'help', label: 'À propos', position: 'left'},
        {
          href: 'https://www.meetup.com/fr-FR/Women-On-Rails/',
          label: 'Meet-up',
          position: 'right',
        },
        {
          href: 'https://twitter.com/womenonrails',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
  
    blog: {
      postsPerPage: 10,
    },

    docs: {
      // Equivalent to `customDocsPath`.
      path: 'docs',
      // Equivalent to `editUrl` but should point to `website` dir instead of `website/docs`.
      editUrl: 'https://github.com/facebook/docusaurus/edit/master/website',
      // Equivalent to `docsUrl`.
      routeBasePath: 'docs',
      // Remark and Rehype plugins passed to MDX. Replaces `markdownOptions` and `markdownPlugins`.
      remarkPlugins: [],
      rehypePlugins: [],
      // Equivalent to `enableUpdateBy`.
      showLastUpdateAuthor: true,
      // Equivalent to `enableUpdateTime`.
      showLastUpdateTime: true,
    },

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Women On Rails`, // You can also put own HTML here.
    },
    // Equivalent to `docsSideNavCollapsible`.
    sidebarCollapsible: false,
    // ...
  },
};

module.exports = siteConfig;
