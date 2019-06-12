<template>
    <div class="row" :style="rowStyle">
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
        },
        computed: {
            rowStyle: function () {
                return {
                    marginLeft: -this.gutter / 2 + 'px',
                    marginRight: -this.gutter / 2 + 'px'
                }
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
    .row{
        display: flex;
    }
</style>