import { defineConfig } from 'blogkit'
import { request } from 'blogkit-notion'
import { theme } from 'blogkit-theme-minimal'

export default defineConfig({
  siteConfig: {
    title: 'u1s1',
    author: 'u1s1',
    url: 'https://u1s1.me'
  },
  theme,
  themeConfig: {
    links: [
      {
        name: 'RSS',
        url: '/api/rss'
      }
    ]
  },
  request
})
