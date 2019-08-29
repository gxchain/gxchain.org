export const state = () => ({
    locales: ['zh', 'en'],
    locale: 'zh'
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    },
    SET_PLATFORM(state, platform) {
        state.platform = platform
    }
}
