import Vue from 'vue';
import Router from 'vue-router';
import origin from "./message.js";
// import homePage from './src/views/home.vue';
// import aboutPage from './src/views/about.vue';
// import start from './src/views/start.vue';
// import frontFaq from './src/views/FrontToEnd-faq.vue';


//懒加载 按需加载
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            component: r => require.ensure([], () => r(require(`${origin.ENV}src/views/home.vue`)), 'home')
        },
        {
            path:'/about',
            component: r => require.ensure([], () => r(require(`${origin.ENV}src/views/about.vue`)), 'about')
        },
        {
            path:'/worker',
            component: r => require.ensure([], () => r(require(`${origin.ENV}src/views/worker.vue`)), 'worker')
        },
        {
            path:'/frontFaq',
            component: r => require.ensure([], () => r(require(`${origin.ENV}src/views/FrontToEnd-faq.vue`)), 'FrontToEnd-faq')
        },
        {
            path:'/messageEvent',
            component: r => require.ensure([], () => r(require(`${origin.ENV}src/views/messageEvent.vue`)), 'messageEvent')
        },
        {
            path:'/start',
            component: r => require.ensure([], () => r(require(`${origin.ENV}src/views/start.vue`)), 'start')
        }
    ]
});