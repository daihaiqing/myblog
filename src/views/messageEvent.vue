<template>
    <div id="test" ref="aggregateNotifContainer">
       messageevent
       <p id="testnone">eetert</p>
    </div>
</template>

<script>
import recordPlay from "../js/testdestory.js";
export default {
    data () {
        return {
            testevent:function(e){
                console.error('data')
            },
            abc:null,
        }
    },
    methods:{
    },
    mounted(){
        this.$refs.aggregateNotifContainer.addEventListener('click',this.testevent);
        // this.$refs.aggregateNotifContainer.addEventListener('click',function abc(e){
        //     if(this.removelistener==='remove'){
        //         this.$refs.aggregateNotifContainer.removeEventListener(e.type,abc);

        //         return
        //     }
        //     console.error('inner')
        // });

        this.abc = new recordPlay(document.getElementById('testnone'));
        this.abc.init();
    },
    beforeDestroy() {
        // this.$refs.aggregateNotifContainer.removelistener='remove';
        // this.$refs.aggregateNotifContainer.click();

        this.$refs.aggregateNotifContainer.removeEventListener('click',this.testevent);
    },
}
</script>
<style lang="scss">
// .paragraph{
//     text-indent: 2em;
// }
</style>
