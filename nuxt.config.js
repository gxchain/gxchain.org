module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'gxchain.org',
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_835228_dxdsagyvm6o.css'
      }
    ],
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'home page of gxchain.org'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#6699ff'
  },
  /**
   * modules
   */
  modules: [
    'bootstrap-vue/nuxt',
  ],
  loader: [{
    test: /\.less$/,
    loaders: 'style-loader!css-loader!less-loader'
  }],
  /**
   * plugins
   */
  plugins: [
    '~/plugins/i18n.js'
  ],
  css: ['~assets/css/common.less'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        return savedPosition
      }
      return {
        x: 0,
        y: 0
      }
    },
    middleware: 'i18n'
  }

}
