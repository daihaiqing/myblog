<template>
    <div class="main">
        <div class="nav-box">
            <p class="icon"></p>
            <ul class="menu">
                <li :class="{active:active === '/'}"><router-link to="/">首页</router-link></li>
                <li :class="{active:active === '/start'}"><router-link to="/start">建站</router-link></li>
                <li :class="{active:active === '/frontFaq'}"><router-link to="/frontFaq">前端faq</router-link></li>
                <li :class="{active:active === '/worker'}"><router-link to="/worker">关于worker</router-link></li>
                <li :class="{active:active === '/about'}"><router-link to="/about">关于</router-link></li>
            </ul>
        </div>
        <div class="router">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
    export default {
        data () {
            return {
                msg: '戴海青的个人主页',
                active:'/'
            }
        },
        watch:{      //监听路由变化
            '$route':'tabType'
        },
        methods:{
            tabType(){
                this.active = this.$route.path;
            }
        },
        created(){
            this.active = this.$route.path;
            // navigator.serviceWorker.register('./src/seviceworker.js')
            // .then(registration => {
            //     console.error('ServiceWorker 注册成功！');
            //     console.error(registration);
            // })
            // .catch(err => console.error('ServiceWorker 注册失败: ', err));

            // navigator.serviceWorker.addEventListener('message',data=>{
            //     console.error('result:',data)
            // });
        }
    }
</script>

<style lang="scss">
@import '../css/main.scss';
$font-active-color:rgb(84,193,255);
$bg-activity-color:rgb(245,245,245);
.icon{
    margin:0 auto;
    width: 140px;
    height: 72px;
    background: url('../images/tangcusuan.png');
    background-size: 100% 100%;
}
.menu{
    text-align: center;
    padding-top:20px;
    li{
        line-height: 35px;
        font-size: 18px;
        a{
            text-decoration:none;
            color:$font-normal-color;
            display: block;
        }
    }
    li:hover{
        background: $bg-activity-color;
        a{
            color:$font-active-color !important;
            font-weight: 600;
        } 
    }
    .active{
        background: $bg-activity-color;
        a{
            color:$font-active-color !important;
            font-weight: 600;
        } 
    }
}
</style>