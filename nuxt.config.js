module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
  head: {
    title: 'nuxtjs-starter-pack',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'styles/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'styles/font-awesome.min.css' },
    ],
  },
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit'
  ],
  css: [
    '@/assets/scss/style.scss'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    }
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  plugins: [
    '~plugins/global',
    '~plugins/file'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
