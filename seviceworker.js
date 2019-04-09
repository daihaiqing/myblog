/**
 * sevivceworker
 */

// var xhr=new XMLHttpRequest();
// // self.localStorage.wed = 'value';
// console.error('inner',self);
// self.clients.matchAll({includeUncontrolled:true}).then(function(clients) {
//     // do something with your clients list
//     console.error(clients.length);
//     // clients.forEach(client => {
//     //     // focused: true
//     //     // frameType: "top-level"
//     //     // id: "6c1467b2-7de9-4b82-bb79-10e66fa530b6"
//     //     // type: "window"
//     //     // url: "http://localhost:8080/#/"
//     //     // visibilityState: "visible"
//     //     // console.error(client);
//     //     // setTimeout(_client=>{
//     //         client.postMessage('payload');
//     //     // }, 3000,client)
//     // })
//     var promise1 = new Promise(function(resolve, reject) {
//         // xhr.onreadystatechange=function(){
//         //     if(xhr.readyState ===4 ){
//         //         if(xhr.status>=200 && xhr.status<300 || xhr.status===304){
//         //             console.error(xhr.responseText);
//         //             resolve('foo');
//         //         }else{
//         //             reject('fail');
//         //             console.error("请求失败！");
//         //         }

//         //     }

//         // };
//         // xhr.open("get","haiqing.api",true);
//         // xhr.send(null);
//         setTimeout(function() {
//           resolve('foo');
//         }, 3000);
//     });
      
//     promise1.then(function(value) {
//         console.error(value);
//         clients.forEach(client => {
//             // focused: true
//             // frameType: "top-level"
//             // id: "6c1467b2-7de9-4b82-bb79-10e66fa530b6"
//             // type: "window"
//             // url: "http://localhost:8080/#/"
//             // visibilityState: "visible"
//             // console.error(client);
//             // setTimeout(_client=>{
//                 client.postMessage(value);
//             // }, 3000,client)
//         })
//     // expected output: "foo"
//     },function(value){
//         console.error(value);
//         clients.forEach(client => {
//             // focused: true
//             // frameType: "top-level"
//             // id: "6c1467b2-7de9-4b82-bb79-10e66fa530b6"
//             // type: "window"
//             // url: "http://localhost:8080/#/"
//             // visibilityState: "visible"
//             // console.error(client);
//             // setTimeout(_client=>{
//                 client.postMessage(value);
//             // }, 3000,client)
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
// self.addEventListener('online', ()=>{
//     console.log('online')
// });
// self.addEventListener('offline', ()=>{
//     console.log('!!!!!!!!!!!!!!')
//     Notification.requestPermission().then(grant => {
//         if (grant !== 'granted') {
//             return;
//         }

//         const notification = new Notification("Hi，网络不给力哟", {
//             body: '戴海青',
//         });

//         notification.onclick = function() {
//             notification.close();
//         };
//     });
// });

// onconnect = function(e) {
//   var port = e.ports[0];

//   port.onmessage = function(e) {
//     var workerResult = 'Result: ' + (e.data[0] + "  " + e.data[1]);
//     console.error('net:',workerResult)
//     port.postMessage(workerResult);
//   }

// }

// const ports = [];

// let abc = 1;
// onconnect = e => {
//   const port = e.ports[0]
//   ports.push(port);
//   // console.error(ports)
//   port.onmessage = evt => {
//         const request = new XMLHttpRequest();
//         request.onreadystatechange=function(){
//             if(request.readyState ===4 ){
//                 console.error(request);
//                 abc+=1;
//                 if(abc%2 === 1){
//                   ports.forEach(p => {
//                     p.postMessage(abc);
//                   })
//                 }
//             }
//         };

//       setInterval(()=>{
//         request.open("get","haiqing.api",true);
//         request.send(null);
//       },2000);
//   }
// }



/**
 * webworker
 */

// onmessage = function(e) {//接收主线程的信息 messageevent
//     console.log('Message received from main script');
//     var workerResult = 'Result: ' + (e.data.name) + ',self:' + self.name;
//     console.log('Posting message back to main script');
//     // postMessage(workerResult);// 处理完以后返回给主线程的信息
//     postMessage(location.href);
// }

// // setTimeout(()=>{
// //     postMessage('我要结束了');
// //     self.close();
// // },10000)


/**
 * shareworker
 */

let count = 0; // 可以看出是共享的
let ports = [];
let intervalid = null;
onconnect = function(e) {
    var port = e.ports[0];
    clearInterval(intervalid);
    if(ports.indexOf(port) === -1){
        ports.push(port);
    }
    let _console = JSON.parse(JSON.stringify(e));
    // 主动推消息
    intervalid = setInterval(()=>{
        ports.forEach(item=>{
            // item.postMessage({count,num:ports.length});
            item.postMessage(count);
        })
        count++;
    },2000);

    // 接到消息去作相应的处理，
    // port.onmessage = _e =>{
    //     // fetch('daihaiqing.api',{
    //     //     credentials: "include" 
    //     // })
    //     // .then(res => res.text())
    //     // .then(res => {
    //         ports.forEach(item=>{
    //             item.postMessage(_console);
    //         })
    //     // })
    // }
}
  