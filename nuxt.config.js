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
    }],
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
    loaders: [{
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'less-loader'
      ]
    }]
  },

  /**
   * modules
   */
  modules: [
    'bootstrap-vue/nuxt'
  ],
  css: ['~assets/css/common.css']

}
