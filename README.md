[![Build Status](https://travis-ci.org/tryingpzm/pzm-test-1.svg?branch=master)](https://travis-ci.org/tryingpzm/pzm-test-1)

## 介绍

测试轮子，暂勿使用

## 开始使用

1，添加CSS
    使用本框架前，请开启border-box
    ```
    *,*::before,*::after{box-sizing:border-box}
    ```
    目前还需要用户设置默认颜色及引入 pzm-gulu-1/index.css（后续会持续改进为SCSS变量）
    
    ```
    :root {
                --base-height: 32px;
                --base-font-size: 14px;
                --button-bg: #fff;
                --button-active-bg: #eee;
                --border-radius: 4px;
                --color: #333;
                --border-color: #999;
                --border-color-hover: #666;
            }
    ```
    
    仅支持IE15及以上浏览器
2,安装gulu
```
npm i --save pzm-gulu-1
```

3,引入gulu
```
import {Button,ButtonGroup,Icon} from 'gulu-pzm-1'
Vue.component('Button',Button)
```

4，引入svg symbols
```
<script src="//at.alicdn.com/t/font_997565_bx9m1eq83pt.js"></script>
```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码


