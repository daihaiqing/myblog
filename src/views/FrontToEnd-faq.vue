<template>
    <div>
        <audio controls autoplay id="audio"></audio>
        <input @click="startRecording()" type="button" value="录音" />
        <input @click="stopRecording()" type="button" value="停止" />
        <input @click="playRecording()" type="button" value="播放" />
        <input @click="uploadAudio()" type="button" value="提交" />
        <input @click="cancelAudio()" type="button" value="取消" />
    </div>
</template>

<script>
var recorder;
export default {
  name: 'test',
  data () {
      return {
          audio:null
      }
  },
  methods:{
    startRecording() {
        HZRecorder.get(function (rec) {
            recorder = rec;
            console.error(recorder)
            recorder.start();
        });
    },
    stopRecording() {
        recorder.stop();
    },
    playRecording() {
        recorder.play(this.audio);
    },
    cancelAudio(){
        recorder.stop();
        recorder.clear();
    },
    uploadAudio() {
        recorder.upload("/upload", function (state, e) {
            switch (state) {
                case 'uploading':
                    //var percentComplete = Math.round(e.loaded * 100 / e.total) + '%';
                    break;
                case 'ok':
                    //alert(e.target.responseText);
                    alert("上传成功");
                    break;
                case 'error':
                    alert("上传失败");
                    break;
                case 'cancel':
                    alert("上传被取消");
                    break;
            }
        });
    }
  },
  mounted(){
      this.$nextTick(()=>{
          this.audio = document.getElementById('audio');
      })
  }
}
</script>