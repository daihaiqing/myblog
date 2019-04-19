import Vue from 'vue';
import App from './src/index.vue';
import router from './route.js'

// import MyWorker from './seviceworker.js';

// console.error('我是worker',MyWorker);
// var worker = new MyWorker();

// setInterval(()=>{
//     worker.postMessage({a: 1});
//     console.error('我发了消息')
// },2000)

// worker.onmessage = function(event) {
//     console.error('我有消息哦')
//     console.error(event)
// };
// worker.onerror=function(event){
//     console.error('我报错啊',event)
// }

new Vue({
    router,
    el: '#main',
    render: h => h(App)
})