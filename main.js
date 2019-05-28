import Vue from 'vue';
import App from './src/index.vue';
import router from './route.js';

console.error('@@@@@@@@@@@@@@@@@')

new Vue({
    router,
    el: '#main',
    render: h => h(App)
})