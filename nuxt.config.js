const webpack = require('webpack')
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
                content: 'width=device-width, initial-scale=1, maximum-scale=1'
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
        '~/plugins/i18n.js',
        {
            src: '~plugins/scrollreveal.js',
            ssr: false
        },
        {
            src: '~/plugins/swiper.js',
            ssr: false
        },
    ],
    css: ['~assets/css/common.less', 'swiper/dist/css/swiper.css'],
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
        plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery'
            })
        ]
    },
    router: {
        middleware: 'i18n'
    },
    generate: {
        routes: ['/', '/bounty', 'developer', 'resource', 'dapps', 'foundation', '/en', '/en/bounty', '/en/developer', '/en/resource', '/en/dapps', '/en/foundation']
    }

}
