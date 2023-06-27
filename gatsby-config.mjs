import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const config = {
  siteMetadata: {
    siteTitle: `Oleksandr (Alex) Oliynyk`,
    siteTitleAlt: `Oleksandr (Alex) Oliynyk - Personal Website`,
    siteHeadline: `Personal Website`,
    siteUrl: `https://alexoliynyk.me`,
    siteDescription: `My personal website giving the glimpse of my professional prowess.`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@alex__oliynyk`,
    basePath: '/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
}

export default config
