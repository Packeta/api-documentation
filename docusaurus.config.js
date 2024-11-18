// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.vsLight;
const darkCodeTheme = require('prism-react-renderer').themes.vsDark;
const remarkMermaid = require('remark-mermaid');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Packeta API',
  tagline: 'Packeta API documentation',
  url: 'https://docs.packeta.com/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  staticDirectories: ['static'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  organizationName: 'packeta',
  projectName: 'documentation',
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMermaid],
          include: ['**/*.md', '**/*.mdx'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
      [
        require.resolve('docusaurus-lunr-search'), {
        }
      ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
//    TODO: Have to be moved after 3.0.0 Docusaurus version
//    autoCollapseSidebarCategories: false,
      navbar: {
        title: 'Packeta',
        logo: {
          alt: 'Packeta logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/introduction',
            activeBasePath: 'docs',
            label: 'API Documentation',
            position: 'left',
          },
          {
            to: 'changelog',
            activeBasePath: 'changelog',
            label: 'Changelog',
            position: 'left',
          }
        ],
      },
      tableOfContents: {
        maxHeadingLevel: 4,
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Packeta | Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["php", "csharp", "csv"]
      },
    }),
};

module.exports = config;
