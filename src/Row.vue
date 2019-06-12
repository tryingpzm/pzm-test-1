<template>
    <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            gutter:[Number,String],
        },
        mounted(){
            if(this.gutter){
                this.$children.forEach(child=>{
                    child.$data.gutter=this.gutter;
                })
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
    .row{
        display: flex;
        /*border: 1px solid black;*/
    }
</style>