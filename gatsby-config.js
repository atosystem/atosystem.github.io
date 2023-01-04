require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Ian Shih`,
    description: `Ian Shih 施貽仁`,
    author: `@yijenshih`,
    siteUrl: process.env.URL,
    indexPageBackgroundImg: "",
    email: "yjshih23@gmail.com",
    navbar_links: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Publications",
        path: "/publication",
      },
      {
        title: "CV",
        path: "/cv",
      },
      {
        title: "Blog",
        path: "/blog",
      },
    ],
    outter_links: {
      facebook: {
        title: "施貽仁(Ian Shih)",
        url: "https://www.facebook.com/sys.ato/",
      },
      instagram: {
        title: "yi_jen_shih",
        url: "https://www.instagram.com/yi_jen_shih/",
      },
      medium: {
        title: "@ato950231",
        url: "https://medium.com/@ato950231",
      },
      twitter: {
        title: "Ian Shih",
        url: "https://twitter.com/yijenshih",
      },
      github: {
        title: "atosystem",
        url: "https://github.com/atosystem",
      },
      linkedin: {
        title: "Ian Shih",
        url: "https://www.linkedin.com/in/ian-shih-77a66218b/",
      },
      googleScholar: {
        title: "Yi-Jen Shih",
        url: "https://scholar.google.com.tw/citations?user=f1feDTMAAAAJ",
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              showCaptions: false,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
          {
            resolve: "gatsby-remark-audio",
            options: {
              preload: "auto",
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `music`,
        path: `${__dirname}/src/music`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/markdowns/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cv`,
        path: `${__dirname}/src/markdowns/cv`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => process.env.URL,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.IG_ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
