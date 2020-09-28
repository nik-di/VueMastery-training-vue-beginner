import Vue from 'vue/dist/vue.esm.js';
import './components/product';
import './components/productOptions';
import './components/button';
import './components/image';

new Vue({
    el: '#app',
    data() {
        return {
            cart: 0,
            parentPremiumInfo: true
        }
    }
});