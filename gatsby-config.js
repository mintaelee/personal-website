module.exports = {
  siteMetadata: {
    title: "Mintae's Personal Website",
    author: "Mintae Lee",
    description: "Personal Website derived from Gatsby.js V2 Starter based on Dimension by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
