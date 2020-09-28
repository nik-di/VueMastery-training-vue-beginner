import { createApp } from 'vue/dist/vue.esm-bundler.js'

const App = createApp({
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'A pair of warm, fuzzy socks',
            selectedVariant: 0,
            variants: [
                {
                    id: 2544,
                    color: 'green',
                    image: 'https://www.vuemastery.com/images/challenges/vmSocks-green.jpg',
                    quantity: 50,
                    sale: true,
                    details: ['50% - cotton', '30% - wool', '20% - polyester'],
                    sizes: ['S', 'M', 'L', 'XL', 'XXL']
                },
                {
                    id: 2545,
                    color: 'blue',
                    image: 'https://www.vuemastery.com/images/challenges/vmSocks-blue.jpg',
                    quantity: 0,
                    sale: false,
                    details: ['50% - cotton', '30% - wool', '20% - polyester'],
                    sizes: ['S', 'M', 'L', 'XS', 'XL']
                }
            ],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        reset() {
            this.cart = 0;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        },
        inStock() {
            const { quantity } = this.variants[this.selectedVariant];
            return quantity > 0;
        },
        onSale() {
            const { sale } = this.variants[this.selectedVariant];
            return sale;
        },
        image() {
            const { image } = this.variants[this.selectedVariant];
            return image;
        },
        details() {
            const { details } = this.variants[this.selectedVariant];
            return details;
        },
        sizes() {
            const { sizes } = this.variants[this.selectedVariant];
            return sizes;
        }
    }
});

window.App = App.mount('#app');
