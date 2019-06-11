<template>
    <div class="wrapper" :class="{error}">
        <input :disabled="disabled"
               :readonly="readonly"
               :value="value"
               type="text"
               @focus="$emit('focus',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @change="$emit('change',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"

        >
        <template ng-if="error">
            <Icon name="error" class="icon-error"></Icon>
            <span class="icon-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './Icon'
    export default {
        components:{
          Icon
        },
        props:{
            value:{
                type:[String,Number],
            },
            disabled:{
                type:Boolean,
                default:false,
            },
            readonly:{
                type:Boolean,
                default:false,
            },
            error:{
                type:String,
            },
        }
    }
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:12px;
    $box-shadow-color:rgba(0,0,0,0.5);
    $error-color:#f1453d;
    .wrapper{
        font-size:$font-size;
        display:inline-flex;
        align-items: center;
        >:not(:last-child){
            margin-right:.5em;
        }
        &.error{
            color:$error-color;
            >input{
                border-color:$error-color;
            }
            .icon-error{
                fill:$error-color;
            }
        }
        >input{
            height:$height;
            border:1px solid $border-color;
            border-radius:$border-radius;
            padding:0 8px;
            font-size:inherit;
            &:hover{
                border-color:$border-color-hover;
            }
            &:focus{
                box-shadow:inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled],&[readonly]{
                color:#bbb;
                border-color:#bbb;
                cursor: not-allowed;
            }
        }
    }
</style>