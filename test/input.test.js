const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input'
//测试用例未添加，可以自己添加
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    //内部分组，属性测试用例组
    describe('Props', () => {
        const Constructor=Vue.extend(Input);
        let vm;
        afterEach(()=>{
            vm.$destroy();
        })
        it('接受value', () => {
            vm=new Constructor({
                propsData:{
                    value:"我是大老虎"
                }
            }).$mount();    //$mount()表示在文档之外渲染
            let element=vm.$el.querySelector("input")
            expect(element.value).to.equal("我是大老虎")
        })
        it('接受disabled', () => {

            vm=new Constructor({
                propsData:{
                    disabled:true
                }
            }).$mount();    //$mount()表示在文档之外渲染
            let element=vm.$el.querySelector("input")
            expect(element.getAttribute("disabled")).to.equal("disabled")
        })
        it('接受readonly', () => {
            vm=new Constructor({
                propsData:{
                    readonly:true
                }
            }).$mount();    //$mount()表示在文档之外渲染
            let element=vm.$el.querySelector("input")
            expect(element.getAttribute("readonly")).to.equal("readonly")
        })
        it('接受 error', () => {
            vm=new Constructor({
                propsData:{
                    error:"我错了"
                }
            }).$mount();    //$mount()表示在文档之外渲染
            let element=vm.$el.querySelector(".icon-message")
            expect(element.textContent).to.equal("我错了")
        })
    })
    describe('事件', () => {
        const Constructor=Vue.extend(Input);
        let vm;
        afterEach(()=>{
            vm.$destroy();
        })
        it('支持input/focus/change/blur事件', () => {
            ['focus','input','change'].forEach((eventName)=>{
                vm=new Constructor({}).$mount();
                const callback=sinon.fake();
                vm.$on(eventName,callback);

                //手动触发
                let event=new Event(eventName);
                Object.defineProperty(event,'target',{value:{value:'hi'},enumerable:true})
                let inputElement=vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith('hi')
            })
        })

    })
})