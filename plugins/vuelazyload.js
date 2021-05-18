import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '/data/images/img-loading.gif',
    loading: '/data/images/img-loading.gif',
    attempt: 1
})