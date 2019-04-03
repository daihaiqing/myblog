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

let worker = new SharedWorker('./seviceworker.js')
// 获取和发送消息都是调用postMessage方法，我这里约定的是传递'get'表示获取数据。

// document.getElementsByTagName('body')[0].addEventListener('click',function(){

    console.error('inner');
    worker.port.postMessage(['first.value','second.value']);
// })

worker.port.onmessage = function(e) {
    console.error('daihaiqing',e.data);
    console.log('Message received from worker');
    console.log(e.lastEventId);
}