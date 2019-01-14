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

import chai from 'chai'
const expect =chai.expect;
//测试icon参数
{
    let constructor=Vue.extend(Button)
    let vm=new constructor({
        propsData:{
            icon:'setting'
        }
    });
    vm.$mount()
    let use=vm.$el.querySelector('use');
    console.log(use);
    expect(use.getAttribute('xlink:href')).to.equal('#i-setting')
    //测试完成清理元素及对象
    vm.$el.remove();
    vm.$destroy();
}
//测试loading参数
{
    let constructor=Vue.extend(Button)
    let vm=new constructor({
        propsData:{
            icon:'setting',
            loading:true,
        }
    });
    vm.$mount()
    let use=vm.$el.querySelector('use');
    console.log(use);
    expect(use.getAttribute('xlink:href')).to.equal('#i-loading')
    //测试完成清理元素及对象
    vm.$el.remove();
    vm.$destroy();
}
//测试 iconPosition默认(不挂载页面的话是不会渲染css的)
{
    let div=document.createElement('div')
    document.body.appendChild(div)
    let constructor=Vue.extend(Button)
    let vm=new constructor({
        propsData:{
            icon:'setting',
        }
    });
    vm.$mount(div)
    let svg=vm.$el.querySelector('svg');
    expect(window.getComputedStyle(svg).order).to.equal('0')
    //测试完成清理元素及对象
    vm.$el.remove();
    vm.$destroy();
}
//测试 iconPosition
{
    let div=document.createElement('div')
    document.body.appendChild(div)
    let constructor=Vue.extend(Button)
    let vm=new constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    });
    vm.$mount(div)
    let svg=vm.$el.querySelector('svg');
    expect(window.getComputedStyle(svg).order).to.equal('1')
    //测试完成清理元素及对象
    vm.$el.remove();
    vm.$destroy();

}
//测试 click（需要用mock来判断函数是否运行）
{
    let constructor=Vue.extend(Button)
    let vm=new constructor({
        propsData:{
            icon:'setting',
        }
    });
    vm.$mount()

    vm.$on('click',()=>{
        console.log('xxxxx')
    })
    vm.$el.click();
    
    //测试完成清理元素及对象
    vm.$el.remove();
    vm.$destroy();

}