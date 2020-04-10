<template>
   <div class='nav-wrap'>
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#fff"
        router
        :collapse="isCollapse"
        >
            <!-- v-for 和 v-if 尽量不要同时使用，可用template标签分离，但：key要加在实际元素中 -->
            <template v-for="(item,index) in navMenuLsit"> 
                <el-submenu v-if="!item.hidden" :key="index" :index="index +''">
                    <template slot="title">
                        <!-- <i class="el-icon-location"></i> -->
                        <svg-icon :svgClass="item.meta.icon" :svgName="item.meta.icon"></svg-icon>
                        <span>{{ item.meta.name }}</span>
                    </template>
                    <!-- 子级菜单 -->
                    <el-menu-item v-for="(list,index) in item.children"
                    :key="index" :index="list.path"
                    >{{ list.meta.name }}</el-menu-item>
                
                
                </el-submenu>
            </template>
        </el-menu>
        <!-- <svg-icon svgClass="up" svgName="up font50"/> -->
   </div>
</template>

<script>
export default {
    name:'navMenu',
    data() {
        return {
            navMenuLsit:[],
            // isCollapse:false,
        }
    },
    created() {
       
    },
    mounted() {
         console.log(this.$store)
        // this.$store.commit("SET_COUNT",100)
        this.navMenuLsit  = this.$router.options.routes;
        // console.log(this.navMenuLsit)
    },
    computed: {
        isCollapse(){
            return this.$store.state.login.isCollapse;
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        }
    },
}
</script>
<style lang="scss" scoped>
    // @import url('../../../styles/config.scss');

    .nav-wrap{
        position: fixed;
        top: 0;
        left: 0;
        width: $navMenu;
        height: 100vh;
        background: #344a5f;
        -webkit-transition: all .3s ease 0s;
        -moz-transition: all .3s ease 0s;
        -o-transition: all .3s ease 0s;
        -ms-transition: all .3s ease 0s;
        transition: all .3s ease 0s;
        svg{
            color: #fff;
            font-size: 20px;
            padding-right: 10px;
        }
    }
    .open{
        .nav-wrap{
            width: $navMenu;
        }
    }
    .close{
        .nav-wrap{
            width: $navMenuMini;
        }
    }
</style>