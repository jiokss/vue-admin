<template>
   <div id="layout" :class="menuStatus?'close':'open'">
        <layoutHeader />
        <layoutMain />
        <layoutNav />
   </div>
</template>

<script>
import layoutHeader from '../Layout/Components/Header'
import layoutMain from '../Layout/Components/Main'
import layoutNav from '../Layout/Components/Nav'
export default {
    name:'layout',
    components:{
        layoutHeader,
        layoutMain,
        layoutNav
    },
    computed: {
        menuStatus:function(){
            return this.$store.state.login.isCollapse;
        }
    },
}
</script>
<style lang="scss" scoped>
    @import url('../../styles/config.scss');
</style>