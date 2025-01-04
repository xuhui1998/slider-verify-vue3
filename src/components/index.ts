import SliderVerify from './slider-verify-v3/index.vue'
import type { App } from 'vue';

export { SliderVerify };

const install = function (app: App) {
    app.component('SliderVerify', SliderVerify);
}

export default { install }
