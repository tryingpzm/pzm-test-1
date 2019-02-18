<template>
    <button @click="$emit('click')" class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon class="icon" v-if="icon&&!loading" :name="icon"></g-icon>
        <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
        <slot class="button-name"></slot>
    </button>
</template>
<script>
    import gIcon from './Icon'
    export default {
        props:{
            icon:{

            },
            loading:{
              default:false,
              type:Boolean,
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return value==='left'||value==='right'
                }
            }
        },
        components:{
            'g-icon':gIcon
        }
    }
</script>
<style rel="stylesheet/scss" type="text/scss" lang="scss">
    @keyframes rotate {
        0%{
            transform:rotate(0);
        }
        100%{
            transform:rotate(360deg);
        }

    }
    .g-button{
        font-size:var(--base-font-size);
        height:var(--base-height);
        padding:0 1em;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        background-color:var(--button-bg);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;        //避免inline不对齐
        .loading{
            animation:rotate 1s linear infinite;
        }
        &:hover{
            cursor: pointer;
            border-color:var(--border-color-hover)
        }
        &:active{
            background-color:var(--button-active-bg);
        }
        &:focus{
            outline:none;
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