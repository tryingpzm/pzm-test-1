const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/Button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {

    //测试button组件存在
    it('存在.', () => {
        expect(Button).to.be.ok
    })

    //测试Button是否可以正确设置Icon
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')

        //这里报错点在于button组件中子组件g-icon是在app.js全局注册的，从此单测试文件创建Button导致内部g-icon无法识别
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        vm.$destroy()
    })

    //测试是否可以正确设置loading
    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        //报错与上一个一样，由于不识别g-icon，useElements是没有的
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
        vm.$destroy()
    })
    it('icon 默认的 order 是 1', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        //老师默认的order是1，我写的是0
        expect(getComputedStyle(icon).order).to.eq('0')
        vm.$el.remove()
        vm.$destroy()
    })
    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount()

        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
})