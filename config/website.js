const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Oleksandr (Alex) Oliynyk - Personal website', // Navigation and Site Title
  siteTitleAlt: 'Alex', // Alternative Site title for SEO
  siteTitleShort: 'Alex', // short_name for manifest
  siteHeadline: 'Creating stunning digital experiences', // Headline for schema.org JSONLD
  siteUrl: 'https://cara.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Alex Oliynyk`s personal website',
  author: 'Alex Oliynyk', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@alex__oliynyk', // Twitter Username
  ogSiteName: 'alex', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
