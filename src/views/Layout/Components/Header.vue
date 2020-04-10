<template>
   <div class='header-wrap'>
       <div class="pull-left header-icon" @click="toggleMenu">
            <svg-icon svgClass="menu" svgName="menu"></svg-icon>
       </div>
       <div class="pull-right">
           <div class="user-info pull-left">
               {{username}}
           </div>
           <div class="pull-left header-icon" @click="exit">
            <svg-icon svgClass="exit" svgName="exit"></svg-icon>
           </div>
       </div>
   </div>
</template>

<script>
export default {
    name:'layoutHeader',
    mounted() {
        
    },
    methods: {
        toggleMenu(){
            console.log(this.$store.commit)
            this.$store.commit('login/SET_COLLAPSE')
        },
        exit(){
            this.$store.dispatch('login/exit')
            .then(res=>{
                this.$router.push({
                    name:'Login'
                })
            })
        }
    },
    computed: {
        username(){
            console.log(this.$store)
            return this.$store.state.login.username
        }
    },
}
</script>
<style lang="scss" scoped>
    .header-wrap{
        position: fixed;
        left: $navMenu;
        right: 0;
        height: $layoutHeader;
        background: #fff;
        -webkit-box-shadow:0 3px 16px 0 rgba(0,0,0,.1);
        line-height: $layoutHeader;
        -webkit-transition: all .3s ease 0s;
        -moz-transition: all .3s ease 0s;
        -o-transition: all .3s ease 0s;
        -ms-transition: all .3s ease 0s;
        transition: all .3s ease 0s;
    }
    .open{
        .header-wrap{
            left: $navMenu;
        }
    }
    .close{
        .header-wrap{
            left: $navMenuMini;
        }
    }
    .header-icon{
        padding:0 30px;
        svg{
            margin-bottom: -8px;
            font-size: 25px;
            cursor: pointer;
        }
    }
    .user-info{
        height: 100%;
        padding:0 32px;
        border-right:1px solid #ededed;
        + .header-icon{
            padding:0 28px;
        }
    }
</style>