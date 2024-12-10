import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gabriel Costa`,
    siteUrl: `https://gabrielc.dev`,
    description: `Hi, come take a look at my projects and professional experience!`,
    icon: `src/images/icon.png`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-P27HRJPT5T",
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
  ]
};

export default config;
