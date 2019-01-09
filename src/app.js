import Vue from 'vue'
import Button from './Button'
import Icon     from './Icon'
import ButtonGroup     from    './ButtonGroup'


//单文件里声明了组件，这里引入，但还没有注册，所以用Vue.component注册为全局组件
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

let app=new Vue({
    el:"#app",
    data(){
        return {
            loading1:false
        }
    }
})