module.exports = {
  siteMetadata: {
    title: `BANANA FIBRE SEEDBAG`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@harerakalex`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'programs',
        link: '/programs'
      },
      {
        name: 'about',
        link: '/about'
      },
      // {
      //   name: 'portfolio',
      //   link: '/portfolio'
      // },
      {
        name: 'contact',
        link: '/contact'
      },
      // {
      //   name: 'membership',
      //   link: '/membership'
      // }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Banana_fibers_Logo.jpg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
