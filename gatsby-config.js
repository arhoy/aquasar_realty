require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Define site URL here
let URL;
if (process.env.NODE_ENV === 'production') {
  URL = 'https://ripplejs.com';
} else {
  URL = 'http://localhost:8000';
}

const queries = require('./src/utils/algolia');

module.exports = {
  siteMetadata: {
    title: 'Cameroon Food Invite',
    description: 'Cameroon Food Invite, Authentic Cameroon Cuisine in Edmonton',
    author: 'Alex Quasar',
    twitterUsername: '@_aquasar',
    image: '/default.png',
    siteUrl: URL,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-emotion`,
    },

    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_ID,
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Merienda\:300,500,700`,
          `Sacramento`,
          `Montserrat`,
<<<<<<< HEAD
          `Josefin Sans\:700`,
          `Tangerine`,
=======
          `Parisienne`,
>>>>>>> temp
        ],
        display: 'swap',
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         subsets: [`100,400,700`],
    //       },
    //       {
    //         family: `Sacramento`,
    //         variants: [`400`, `700`],
    //       },
    //       {
    //         family: `Montserrat`,
    //         variants: [`400`, `700`],
    //       },
    //     ],
    //   },
    // },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `miss.knitsalot`,
      },
    },
    `gatsby-plugin-twitter`,
    // {
    //   resolve: `gatsby-plugin-stripe`,
    // },
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: [
    //       'Balance',
    //       'BalanceTransaction',
    //       'Product',
    //       'ApplicationFee',
    //       'Sku',
    //       'Subscription',
    //     ],
    //     secretKey: process.env.STRIPE_SECRET_KEY,
    //     downloadFiles: true,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-snipcart',
    //   options: {
    //     apiKey: process.env.SNIPCART_API,
    //     autopop: true,
    //     js: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js',
    //     styles: 'https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css',
    //   },
    // },

    // {
    //   resolve: 'gatsby-plugin-algolia',
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
    //     indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    //     queries,
    //     chunkSize: 10000,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: process.env.MAILCHIMP_ENDPOINT,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-crisp-chat',
    //   options: {
    //     websiteId: process.env.CRISP_WEBSITE_ID,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
    //   },
    // },
  ],
};
