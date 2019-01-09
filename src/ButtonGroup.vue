<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted(){
            for(let node of this.$el.children){
                let name=node.nodeName.toLowerCase();
                if(name!=='button'){
                    console.warn(`g-button-group的子应该是g-button，而不是${name}`)
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
    .g-button-group{
        display: inline-flex;
        >.g-button{
            border-radius: 0;
            &:not(:first-child){
                /*border-left:none;*/
                margin-left: -1px;
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
        }
    }
</style>