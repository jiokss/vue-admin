<template>
   <div class='main-wrap'>
       <div class="main-content">
           <div class="content">
               <router-view></router-view>
           </div>
       </div>
   </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
    .main-wrap{
        height: 100vh;
        // position: fixed;
        // left: $navMenu;
        // top: 75px;
        // right: 0;
        // bottom: 0;
        // border: 30px solid #f7f7f7;
        // border-bottom:none;
        // -webkit-box-sizing: border-box;
    }
    .main-content{
        width: 100%;
        height: 100%;
        padding-top: $layoutHeader + 30;
        padding-left:$navMenu + 30;
        padding-right:30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: all .3s ease 0s;
        -moz-transition: all .3s ease 0s;
        -o-transition: all .3s ease 0s;
        -ms-transition: all .3s ease 0s;
        transition: all .3s ease 0s;
    }
    .open{
        .main-content{
            padding-left:$navMenu + 30;
        }
    }
    .close{
        .main-content{
            padding-left:$navMenuMini+30;
        }
    }
    .content{
        width: 100%;
        height: 100%;
        padding-top: 30px;
        padding-left:30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
    }
</style>