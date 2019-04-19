/**
 * sevivceworker
 */

// console.error('inner',self);
// self.clients.matchAll({includeUncontrolled:true}).then(function(clients) {
//     // do something with your clients list
//     console.error(clients.length);
//     var promise1 = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//           resolve('foo');
//         }, 3000);
//     });
      
//     promise1.then(function(value) {
//         console.error(value);
//         clients.forEach(client => {
//             client.postMessage(value);
//         })
//     // expected output: "foo"
//     },function(value){
//         console.error(value);
//         clients.forEach(client => {
//             client.postMessage(value);
//         })
//     });
// });

// self.addEventListener('install', event => {
//     // event.waitUtil 用于在安装成功之前执行一些预装逻辑
//     // 但是建议只做一些轻量级和非常重要资源的缓存，减少安装失败的概率
//     // 安装成功后 ServiceWorker 状态会从 installing 变为 installed
//     console.error('install');
//     event.waitUntil(self.skipWaiting());
// });

// self.addEventListener('activate', event => {
//     console.error('activate')
// });
// self.addEventListener('offline', ()=>{
//     console.error('!!!!!!!!!!!!!!')
//     Notification.requestPermission().then(grant => {
//         const notification = new Notification("Hi，网络不给力哟", {
//             body: '戴海青',
//         });

//         notification.onclick = function() {
//             notification.close();
//         };
//     });
// });


// self.addEventListener('fetch', event => {
//     const url = new URL(event.request.url);
  
//     console.error('url',url)
//     // serve the cat SVG from the cache if the request is
//     // same-origin and the path is '/dog.svg'
//     if (url.origin == location.origin && url.pathname.endsWith('/dog.svg')) {
//       event.respondWith(caches.match('cat.svg'));
//     }
// });


/**
 * webworker
 */

onmessage = function(e) {//接收主线程的信息 messageevent
    console.log('Message received from main script');
    var workerResult = 'Result: ' + (e.data.name) + ',self:' + self.name;
    console.log('Posting message back to main script');
    // postMessage(workerResult);// 处理完以后返回给主线程的信息
    postMessage(location.href);
}

// setTimeout(function(){
//     postMessage('我要结束了');
//     self.close();
// },10000)
// postMessage({
//     value: '工作线程向主线程发送消息'
// });

/**
 * shareworker
 */
// let currents= [];

// let count = 0; // 可以看出是共享的
// let ports = [];
// let intervalid = null;
// onconnect = function(e) {
//     var port = e.ports[0];
//     var current = e.currentTarget;
//     clearInterval(intervalid);
//     if(ports.indexOf(port) === -1){
//         ports.push(port);
//         currents.push(current);
//     }

//     console.error('name',self.name)
//     let _console = JSON.parse(JSON.stringify(e));
//     // 主动推消息
//     intervalid = setInterval(()=>{
//         ports.forEach(item=>{
//             // item.postMessage({count,num:ports.length});
//             item.postMessage(count);
//         })
//         count++;
//     },2000);

//     // 接到消息去作相应的处理，
//     // port.onmessage = _e =>{
//     //     // fetch('daihaiqing.api',{
//     //     //     credentials: "include" 
//     //     // })
//     //     // .then(res => res.text())
//     //     // .then(res => {
//     //         ports.forEach(item=>{
//     //             item.postMessage(_console);
//     //         })
//     //     // })
//     // }
// }
  