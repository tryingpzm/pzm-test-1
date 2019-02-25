<template>
    <svg class="icon">
        <use :xlink:href="`#i-${name}`">
        </use>
    </svg>
</template>

<script type="text/ecmascript-6">
    import "./svg"
    export default {
        props:{
            name:{
                type:String,
                default:'setting'
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
    }
</style>