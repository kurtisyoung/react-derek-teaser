/**
 * @file Configuration for both client and server environments.
 */

module.exports = {
  // HTML metadata.
  meta: {
    // Title of the app.
    title: `Derek Leung - Century 21 Realty`,

    // Short description of the app.
    description: `Real Estate at its finest`,

    // Search keywords.
    keywords: [`real-estate`, `buyer`, `seller`, `custom-homes`, `century-21-realty`],

    // App URL.
    url: require(`../package.json`).homepage
  },

  // Port.
  port: process.env.PORT || 8080,

  // Force redirects to HTTPS.
  forceSSL: process.env.FORCE_SSL || false,

  // Determines whether SSR is enabled.
  ssrEnabled: process.env.NODE_ENV !== `development`,

  // Supported locales. First locale is the default locale.
  locales: [`en`, `ja`],

  // Config options specific to the `build` task.
  build: {
    // Public path of all loaded assets.
    publicPath: process.env.PUBLIC_PATH || `/`,

    // Specifies whether the linter should run.
    linter: true,

    // Specifies whether JavaScript and CSS source maps should be generated.
    sourceMap: true,

    // Specifies whether a bundle analyzer report should be generated at the end
    // of the build process.
    analyzer: process.env.ANALYZE_BUNDLE === `true` ? true : false
  },

  // Config options specific to the `dev` task.
  dev: {
    // Specifies whether the linter should run.
    linter: false
  }
};