const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/mintaelee/Documents/code-immersives/term2/projects/personal-website/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mintaelee/Documents/code-immersives/term2/projects/personal-website/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mintaelee/Documents/code-immersives/term2/projects/personal-website/src/pages/index.js")))
}

