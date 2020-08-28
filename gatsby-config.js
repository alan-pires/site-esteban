
module.exports = {
  siteMetadata: {
    title: `Psicólogo Esteban Chala`,
    description: `Terapia Online`,
    author: `Esteban Chala`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SWAPI",
        fieldName: "swapi",
        url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
        icon: `src/images/fly.png`, // This path is relative to the root of the site.
      },      
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '780863666013202',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:400`,
          //`source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}

