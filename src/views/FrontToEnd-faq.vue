<template>
    <div>
      <p @click="go">go about</p>
    </div>
</template>

<script>
var recorder;
export default {
  name: 'faq',
  data () {
      return {
      }
  },
  methods:{
    go(){
      this.$router.push({name:'about'})
    }
  },
  mounted(){
  }
}
</script>