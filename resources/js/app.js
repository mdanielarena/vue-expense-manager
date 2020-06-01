import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router.js'
import Vue from 'vue';
import store from './store/index'

window.Vue = require('vue');
window.axios = require('axios');

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.devtools = true
Vue.config.debug = true
axios.defaults.withCredentials = true
axios.defaults.baseUrl = url

Vue.component('App', require('./components/App.vue').default);

new Vue({
    store,
    router,
    el: '#app',
});
