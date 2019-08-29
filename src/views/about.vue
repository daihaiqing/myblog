<template>
    <div>
       <video id="video" ref="video" autoplay style="width:600; height:400;"></video>
    </div>
</template>

<script>
var recorder;
export default {
    name: 'test',
    data () {
        return {
        }
    },
    methods:{
    },
    mounted(){

        let video = this.$refs.video;
        // 使用srcObject给video添加流
        let localStream1 = navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then((stream) =>  {
            if ('srcObject' in video) { // 判断是否支持 srcObject 属性
                video.srcObject = stream;
            } else {
                video.src = window.URL.createObjectURL(stream);
            }
            video.onloadedmetadata = function(e) {
                video.play();
            };
        })
        .catch((err) => { // 捕获错误
            console.error(err.name + ': ' + err.message);
        });
    }
}
</script>