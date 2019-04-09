// var xhr=new XMLHttpRequest();
// xhr.onreadystatechange=function(){
//     if(xhr.readyState ===4 ){
//         if(xhr.status>=200 && xhr.status<300 || xhr.status===304){
//             console.error(xhr.responseText);
//             // resolve('foo');
//         }else{
//             // reject('fail');
//             console.error("请求失败！");
//         }

//     }

// };
// xhr.open("get","haiqing.api",true);
// xhr.send(null);
// window.localStorage.wed = 'value';
// console.error('outer',window);
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./seviceworker.js', {scope: '/'})
//         .then(registration => console.error('ServiceWorker 注册成功！作用域为: ', registration.scope))
//         .catch(err => console.error('ServiceWorker 注册失败: ', err));

//     navigator.serviceWorker.addEventListener('message',data=>{
//         console.error('result:',data)
//     })
// }

// setTimeout(()=>{console.error(document.getElementsByTagName('body'))},2000)


/**
 * sevivceworker
 */



// let worker = new SharedWorker('./seviceworker.js')
// // 获取和发送消息都是调用postMessage方法，我这里约定的是传递'get'表示获取数据。

// // document.getElementsByTagName('body')[0].addEventListener('click',function(){

//     console.error('inner');
//     worker.port.postMessage(['first.value','second.value']);
// // })

// worker.port.onmessage = function(e) {
//     console.error('daihaiqing',e.data);
//     console.log('Message received from worker');
//     console.log(e.lastEventId);
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

var worker = new SharedWorker('./seviceworker.js',{name:'test'});

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