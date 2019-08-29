// Smooth Scroll handler methods
function easeInOutQuad(t, b, c, d) {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return -c / 2 * (t * (t - 2) - 1) + b
}

export function scrollTo(scroller, to, duration, cb) {
    const start = scroller.scrollTop
    const change = to - start
    const increment = 20
    let currentTime = 0
    const animateScroll = function () {
        currentTime += increment
        const val = easeInOutQuad(currentTime, start, change, duration)
        scroller.scrollTop = Math.round(val)
        if (currentTime < duration) {
            setTimeout(animateScroll, increment)
        } else if (cb && typeof cb === 'function') {
            cb()
        }
    }
    animateScroll()
}

// Return an element's offset wrt document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset
export function offsetTop(el) {
    if (!el.getClientRects().length) {
        return 0
    }
    const bcr = el.getBoundingClientRect()
    const win = el.ownerDocument.defaultView
    return bcr.top + win.pageYOffset
};

export function deviceType(u) {
    let browser = { //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    };
    if (browser.mobile || browser.ios || browser.android || browser.iPhone || browser.iPad) {
        return 'H5'
    } else {
        return 'WEB'
    }
}
