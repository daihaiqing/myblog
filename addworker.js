/**
 * sevivceworker
 */

// if ('serviceWorker' in navigator) {
//     console.error('window',window)
//     navigator.serviceWorker.register('./seviceworker.js',{scope:'/'})
//         .then(registration => {
//             console.error('ServiceWorker 注册成功！');
//             console.error(registration);
//         })
//         .catch(err => console.error('ServiceWorker 注册失败: ', err));

//     navigator.serviceWorker.addEventListener('message',data=>{
//         console.error('result:',data)
//     });
//     // fetch('./images/tangcusuan.png').then(e=>e.text()).then(e=>console.error(e))
// }


/**
 * webworker
 */


// var  myWorker = new Worker('./seviceworker.js',{name:'test'});

// // var  myWorker2 = new Worker('./seviceworker.js',{name:'test2'});

// // setTimeout(()=>{
// //     myWorker.postMessage({name:'daihaiqing'});//告诉worker线程做一些事情，
    
// // },3000);

// // setTimeout(()=>{
// //     myWorker2.postMessage({name:'haiqing'});//告诉worker线程做一些事情，
    
// // },4000);

// myWorker.onmessage = function(e) {
//     // do something 收到worker消息后要处理的事情
//     console.error(e);
// }

// // myWorker2.onmessage = function(e) {
// //     // do something 收到worker消息后要处理的事情
// //     console.error(e);
// // }


// setInterval(()=>{
//     myWorker.postMessage({name:'daihaiqing'});//告诉worker线程做一些事情，
    
// },3000);
// // setTimeout(()=>{
// //     console.error('结束了');
// //     myWorker.terminate();
// // },10000);


/**
 * shareworker
 */

var worker = new SharedWorker('./seviceworker.js');

// var worker2 = new SharedWorker('./seviceworker.js',{name:'test2'});

console.error(worker.port)
worker.port.onmessage=function(e){
    console.error(e)
}

// worker2.port.onmessage=function(e){
//     console.error('2',e)
// }


// setInterval(()=>{
//     worker.port.postMessage({
//         key:'start'
//     })
// },1000);

worker.port.onerror=function(e){
    console.error(e)
}

// setTimeout(()=>{
//     console.error('我是worker1,我要结束了');
//     worker.port.close();
// },10000);


// worker.port.addEventListener('message', function(e) {
//     console.error(e)
// });
// worker.port.start(); // note: need this when using addEventListener