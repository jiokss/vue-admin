<template>
       <svg :class="svgClass2" aria-hidden="true">
           <use :xlink:href="svgName2"></use>
       </svg>   
</template>

<script>
export default {
    name:'svgIcon',
    data(){
        return {

        }
    },
    mounted() {
        // console.log(this.svgClass)
        // console.log(this.svgName)
        // console.log(this)
        this.svgClass2 = this.svgClass;
        this.svgName2 = this.svgName;
    },
    computed: {
       svgName2:{
           set(){
               return this.svgName
           },
           get(){
               return `#icon-${this.svgClass}`
           }
           
       },
       svgClass2:{
           set(){
              return this.svgClass;
           },
           get(){
                if(this.svgName){
                    return `svg-icon ${this.svgName}`
                }else{
                    return `svg-icon`
                }
           }
           
       }
    },
    props:['svgClass','svgName'],
}
</script>
<style lang="scss" scoped>
    .svg-icon{
        width: 1em;
        height: 1em;
        fill: currentColor;
        // color: red;
        // &.font50{
        //     font-size: 50px;
        // }
    }
</style>