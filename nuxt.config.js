const webpack = require('webpack')
module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'GXChain 可信数据的价值网络',
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: '//at.alicdn.com/t/font_835228_cv4vzh2wed.css'
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
                content: '公信链GXChain是一条为全球数据经济服务的基础链，旨在打造可信数据的价值网络。'
            },
            {
                hid: 'keyswords',
                name: 'keyswords',
                content: 'GXChain官网，公信宝，区块链，GXChain白皮书，可信数据计算'
            }
        ],
        script: [{
            type: 'application/ld+json',
            src: '/js/schma.json',
            head: true
        }]
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
        {
            src: '~plugins/device.js',
            ssr: false
        }
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
        middleware: ['i18n']
    },
    generate: {
        routes: ['/', '/bounty', 'developer', 'resource', 'dapps', 'foundation', 'trustNodes', 'privacy', '/en', '/en/bounty', '/en/developer', '/en/resource', '/en/dapps', '/en/foundation', '/en/trustNodes', '/en/privacy']
    }

}
