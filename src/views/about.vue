<template>
    <div>
        about
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
        startRecording(data) {
            console.error('start');
            if(this.stopRecording(data) === 'return'){
                return;
            }
            console.error('end');
        },
        stopRecording(data) {
            console.error('stop');
            if(data !== 'return'){
                return ;
            }else{
                return data;
            }
            // console.error(data);
        },
    },
    mounted(){
        this.startRecording('return');
        console.error('================================');
        this.startRecording('12');
    }
}
</script>