import { type DefaultTheme, defineConfig } from 'vitepress'
import pkg from '../../package.json'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vuejx?",
  description: "Vuejx docs",
  lang: 'vi-VN',
  cleanUrls: true,
  metaChunk: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    footer: {
      message: 'Early access.',
      copyright: 'Copyright © 2024-present VFlowX'
    },
    sidebar: {
      '/vuejx/': { base: '/vuejx/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vdx-hub/vuejx-docs' },
      { icon: 'discord', link: 'https://discord.gg/mmA6gBD8EF' },
    ],
    lastUpdatedText: 'Sửa lần cuối',
    outlineTitle: 'Trong trang này',
    logo: { src: '/cave.gif', width: 24, height: 24 },
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vue.svg' }],
  ],
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is VitePress?', link: 'what-is-vitepress' },
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Routing', link: 'routing' },
        { text: 'Deploy', link: 'deploy' }
      ]
    },
    {
      text: 'Writing',
      collapsed: false,
      items: [
        { text: 'Markdown Extensions', link: 'markdown' },
        { text: 'Asset Handling', link: 'asset-handling' },
        { text: 'Frontmatter', link: 'frontmatter' },
        { text: 'Using Vue in Markdown', link: 'using-vue' },
        { text: 'Internationalization', link: 'i18n' }
      ]
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: 'custom-theme' },
        {
          text: 'Extending the Default Theme',
          link: 'extending-default-theme'
        },
        { text: 'Build-Time Data Loading', link: 'data-loading' },
        { text: 'SSR Compatibility', link: 'ssr-compat' },
        { text: 'Connecting to a CMS', link: 'cms' }
      ]
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: [
        { text: 'MPA Mode', link: 'mpa-mode' },
        { text: 'Sitemap Generation', link: 'sitemap-generation' }
      ]
    },
    { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: 'site-config' },
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Default Theme',
          base: '/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
            { text: 'Sidebar', link: 'sidebar' },
            { text: 'Home Page', link: 'home-page' },
            { text: 'Footer', link: 'footer' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Team Page', link: 'team-page' },
            { text: 'Prev / Next Links', link: 'prev-next-links' },
            { text: 'Edit Link', link: 'edit-link' },
            { text: 'Last Updated Timestamp', link: 'last-updated' },
            { text: 'Search', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}


function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Vuejx', link: '/vuejx/' },
    { text: 'About', link: '/about' }
  ]
}
async function sidebarDocs() {
  return [
    {
      text: 'Vuejx-binhth',
      collapsible: true,
      items: [{
        text: "What's vuejx",
        link: '/docs/vuejx/'
      }, {
        text: 'Api',
        link: '/docs/vuejx/api/'
      }, {
        text: 'Component',
        link: '/docs/vuejx/component/',
        items: [{
          text: 'Config',
          collapsible: true,
          link: '/docs/vuejx/component/config/'
        }, {
          text: 'Form',
          items: [{
            text: 'text',
            link: '/docs/vuejx/component/form/text',
          },
          {
            text: 'number',
            link: '/docs/vuejx/component/form/number',
          },
          {
            text: 'label',
            link: '/docs/vuejx/component/form/label',
          },
          {
            text: 'textarea',
            link: '/docs/vuejx/component/form/textarea',
          },
          {
            text: 'autocomplete',
            link: '/docs/vuejx/component/form/autocomplete',
          },
          {
            text: 'teleport',
            link: '/docs/vuejx/component/form/teleport',
          },
          {
            text: 'table',
            link: '/docs/vuejx/component/form/table',
          },]
        }, {
          text: 'Layout',
          items: [{
            text: 'vuejx-screen',
            link: '/docs/vuejx/component/layout/vuejx-screen',
          },
          ]
        }]
      }, {
        text: 'Template',
        link: '/docs/vuejx/template/'
      },
        // {
        // text: 'Tips',
        // link: '/docs/vuejx/tips'
        // }
      ]
    },
    // {
    //   text: "Deverloper's Tips",
    //   collapsible: true,
    //   items: [{
    //     text: 'Javascript',
    //     link: '/tips/javascript',
    //   }, {
    //     text: 'Mongodb',
    //     link: '/tips/mongodb',
    //   },]
    // },
  ];
}
async function sidebarTips() {
  return [
    {
      text: 'JS',
      // collapsible: true,
      link: '/docs/tips/javascript'
    },
    {
      text: "Mongodb",
      link: '/docs/tips/mongodb'
      // collapsible: true,
      // items: [{
      //   text: 'Javascript',
      //   link: '/tips/javascript',
      // }, {
      //   text: 'Mongodb',
      //   link: '/tips/mongodb',
      // },]
    },
  ];
}