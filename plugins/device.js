import {
    deviceType
} from "~/utils/";

export default ({
    app,
    store
}) => {
    let recalc = function () {
        let platform = deviceType(window.navigator.userAgent);
        let bodyClass = document.body.classList;

        if (platform === 'WEB') {
            bodyClass.remove('H5');
            bodyClass.add('WEB');
        } else {
            bodyClass.remove('WEB');
            bodyClass.add('H5');
        }
        store.commit("SET_PLATFORM", platform);
    }
    recalc();
}
