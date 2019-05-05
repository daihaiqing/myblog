import Vue from 'vue';
import App from './src/index.vue';
import router from './route.js'

new Vue({
    router,
    el: '#main',
    render: h => h(App)
})