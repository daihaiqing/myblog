import Vue from 'vue';
import Router from 'vue-router';
import homePage from './src/views/home.vue';
import aboutPage from './src/views/about.vue';
import start from './src/views/start.vue';
import frontFaq from './src/views/FrontToEnd-faq.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:homePage
        },
        {
            path:'/about',
            component:aboutPage
        },
        {
            path:'frontFaq',
            component:frontFaq
        },
        {
            path:'/start',
            component:start
        }
    ]
})