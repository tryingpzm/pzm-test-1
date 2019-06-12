<template>
    <div class="col" :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}" :class="{[`col-${span}`]:!!span,[`offset-${offset}`]:!!offset}">
        <div style="border: 1px solid red;height:100%">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props:{
            span:[Number,String],
            offset:[Number,String],
        },
        data(){
            return {
                gutter:0,
            }
        },
        watch:{
            gutter:function(val){
                // this.$set(this,'gutter',val);
            }
        }
    }
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>
    .col{
        height: 100px;
        /*background: grey;*/
        /*border: 1px solid red;*/

        @for $n from 1 through 24{
            &.col-#{$n}{
                width:($n/24)*100%;
            }
        }
        @for $n from 1 through 24{
            &.offset-#{$n}{
                margin-left:($n/24)*100%;
            }
        }
    }
</style>