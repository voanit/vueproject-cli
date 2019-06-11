import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import global from './global.js';//引入全局对象

export default new vuex.Store({
    modules: {
        global:global
        // other: other,//其他组件
    }
})
