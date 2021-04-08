// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuesax from 'vuesax'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'

import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
    // options here
})
Vue.use(VueRouter)
Vue.use(vueResource)
Vue.config.productionTip = false

import WelcomePokedex from './components/WelcomePokedex'
import search from './components/search.vue'
import HelloWorld from './components/HelloWorld.vue'
import EmptyList from './view/EmptyList.vue'
const router = new VueRouter({
        mode: 'history',
        base: __dirname,
        routes: [{
                path: '/welcome',
                component: WelcomePokedex
            },
            {
                path: '/search',
                component: search
            },
            {
                path: '/list-pokemon',
                name: 'list-pokemon',
                component: () =>
                    import ('./view/EmptyList.vue')
            },
        ]
    })
    /* eslint-disable no-new */
new Vue({
    router, // Router added to the Vue instance
    components: { App },
    template: '<App/>',

}).$mount('#app')