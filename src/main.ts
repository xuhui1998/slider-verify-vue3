import { createApp } from 'vue'
import App from './App.vue'
// import '../lib/style.css';
// import SliderVerify from '../lib/slider-verify-vue3.es.js';
import SliderVerify from './components/index.ts';

createApp(App).use(SliderVerify).mount('#app')
