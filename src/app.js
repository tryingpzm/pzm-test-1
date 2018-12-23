import Vue from 'vue'
import Button from './button'

//单文件里声明了组件，这里引入，但还没有注册，所以用Vue.component注册为全局组件
Vue.componen('g-button',Button)

let app=new Vue({
    el:"#app",
})