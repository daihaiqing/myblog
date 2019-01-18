import Vue from 'vue';
import Router from 'vue-router';
// import homePage from './src/views/home.vue';
// import aboutPage from './src/views/about.vue';
// import start from './src/views/start.vue';
// import frontFaq from './src/views/FrontToEnd-faq.vue';

Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            component:require.ensure([], (require) => {
                require('./src/views/home.vue');
            })
        },
        {
            path:'/about',
            component:require.ensure([], (require) => {
                require('./src/views/about.vue');
            })
        },
        {
            path:'/frontFaq',
            component:require.ensure([], (require) => {
                require('./src/views/FrontToEnd-faq.vue');
            })
        },
        {
            path:'/start',
            component:require.ensure([], (require) => {
                require('./src/views/start.vue');
            })
        }
    ]
});