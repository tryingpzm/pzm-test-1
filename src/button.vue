<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`">
            </use>
        </svg>
        <slot class="button-name"></slot>
    </button>
</template>
<script>
    export default {
        props:['icon','iconPosition']
    }
</script>
<style rel="stylesheet/scss" type="text/scss" lang="scss">
    .g-button{
        font-size:var(--base-font-size);
        height:var(--base-height);
        padding:0 0.1em;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        background-color:var(--button-bg);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;        //避免inline不对齐
        &:hover{
            border-color:var(--border-color-hover)
        }
        &:active{
            background-color:var(--button-active-bg);
        }
        &:focus{
            outline:none;
        }
        .icon {
            width: 1em;
            height: 1em;
        }
        &.icon-left{
            .icon{
                order:0;
                margin-right:.3em;
                margin-left:0;
            }
            .button-name{
                order:1;
            }
        }
        &.icon-right{
            .icon{
                order:1;
                margin-right:0;
                margin-left:.3em;
            }
            .button-name{
                order:0;
            }
        }
    }
</style>