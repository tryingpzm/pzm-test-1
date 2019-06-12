<template>
    <div class="col" :style="colStyle" :class="colClasses">
            <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            span: [Number, String],
            offset: [Number, String],
        },
        data() {
            return {
                gutter: 0,
            }
        },
        computed: {
            colStyle: function () {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            colClasses: function () {
                return {
                    [`col-${this.span}`]:!!this.span,
                    [`offset-${this.offset}`]:!!this.offset
                }
            },
        }
    }
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>
    .col {
        height: 100px;
        @for $n from 1 through 24 {
            &.col-#{$n} {
                width: ($n/24)*100%;
            }
        }
        @for $n from 1 through 24 {
            &.offset-#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
</style>