import Vue from 'vue/dist/vue.esm.js';
import './components/Product/Product';
import './components/ProductOptions/ProductOptions';
import './components/Button/Button';
import './components/Image/Image';
import './components/Review-form/Review-form';
import './components/Reviews-list/ReviewList';

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