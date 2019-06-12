<template>
    <div class="col" :class="{[`col-${span}`]:true}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "",
        props:{
            span:[Number,String]
        }
    }
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>
    .col{
        height: 100px;
        background: grey;
        border: 1px solid red;

        $class:col-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                width:($n/24)*100%;
            }
        }
    }
</style>