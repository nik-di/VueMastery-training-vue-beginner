import Vue from 'vue/dist/vue.esm.js';
import './components/product';
import './components/productOptions';
import './components/button';
import './components/image';

new Vue({
    el: '#app',
    data() {
        return {
            cart: [],
            parentPremiumInfo: true
        }
    },
    methods: {
        incrementCart(id) {
            this.cart.push(id);
        },
        resetCart() {
            this.cart.splice(0);
        },
        removeProduct(id) {
            const searchedIndex = this.cart.indexOf(id);
            if (searchedIndex === -1) {
                return;
            }
            this.cart.splice(searchedIndex, 1);
        }
    }
});