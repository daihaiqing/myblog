<template>
    <div>
        <h1>worker之shareworker</h1>
        <p class="paragraph">首先附上mdn地址：<a href="https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker">https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker</a></p>
        <p class="paragraph">SharedWorker侧重于share,在同域名下可以不同的tab下可以共享同信息。</p>
        <p class="paragraph">他的初始化声明很简单</p>
        <pre>
            <code>
                new SharedWorker('worker.js');
            </code>
        </pre>
        <p class="paragraph">同时他也可以有第二个参数，这个参数可以省略，该参数会告诉worker他可以和哪一个worker共享同一个线程（即同一个作用域SharedWorkerGlobalScope），如果不加的话会默认是同一个默认线程，可以在worker中用self.name获取到这个字段，例如：</p>
        <pre>
            <code>
                new SharedWorker('worker.js','test');
            </code>
        </pre>
        <p class="paragraph">主线程与worker子线程通过port 进行信息传递(postmessage，onmessage)。例如：</p>
        <pre>
            <code>
                myWorker.port.postMessage([first.value,second.value]);//告诉worker线程做一些事情， 
                myWorker.port.onmessage = function(e) {
                    // do something 收到worker消息后要处理的事情 
                }
                或
                myWorker.addEventListener('message' , function(e) {
                    // do something 收到worker消息后要处理的事情 
                });
                myWorker.port.start();
                // *** note: need this when using addEventListener start();
            </code>
        </pre>
        <p class="paragraph">注意：当用addEventListener监听message事件的时候，必须用调用start()方法来开启这个worker线程</p>
        <p class="paragraph">worker中的逻辑也很简单</p>
        <pre>
            <code>
                onconnect = function(e) { 
                    var port = e.ports[0];

                // 接到主线程传来的信息去作相应的处理， 
                    port.onmessage = event =>{
                        //做一些相关操作 ，通过postMessage向主线程反馈信息
                        port.postMessage('123'); 
                    }
                }
            </code>
        </pre>
        <p class="paragraph">
            每当有新的worker连入的时候就会触发onconnect事件可以在此时做一些事情。
        </p>
        <p class="paragraph">
            e是一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MessageEvent">messageEvent</a>,我们目前可以只关心ports、data、currentTarget这三个字段；其中的ports是一个messageport数组,它用于我们向相应的的tab发送信息用和接收消息；currentTarget是当前worker线程作用域；data字段用于接收消息；
        </p>
        <p class="paragraph">
            event也是一个messageEvent；
        </p>
        <p class="paragraph">
            在sharedworker线程里不能操作dom和bom，可以使用xmlhttprequest但是responseXML、channel这两个字段会一直是null,同时受同源策略影响！！！！！
        </p>
        <p class="paragraph">
            调试：打开应用worker的站点，新开启空白tab，输入 chrome://inspect/ 会弹出调试面板（ps：只有chrome有这个功能，其他的可以通过postMessage把消息发送到主线程进行打印。）。
        </p>
    </div>
</template>

<script>
var recorder;
export default {
    data () {
        return {
        }
    },
    methods:{
    },
    mounted(){
    }
}
</script>
<style lang="scss">
.paragraph{
    text-indent: 2em;
    line-height: 1.3;
    padding:10px 0;
}
</style>
