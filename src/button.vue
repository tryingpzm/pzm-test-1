<template>
    <button class="g-button">确定</button>
</template>
<script>
    export default {
    }
</script>
<style rel="stylesheet/scss"type="text/scss" lang="scss">
    .g-button{
        font-size:var(--base-font-size);
        height:var(--base-height);
        padding:0 1em;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        background-color:var(--button-bg);
        &:hover{
            border-color:var(--border-color-hover)
        }
        &:active{
            background-color:var(--button-active-bg);
        }
        &:focus{
            outline:none;
        }
    }
</style>