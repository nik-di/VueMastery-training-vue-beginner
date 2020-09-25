import { createApp } from 'vue/dist/vue.esm-bundler.js'

const App = createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks',
            inStock: true,
            inventory: 10,
            sale: true,
            image: '',
            details: ['50% - cotton', '30% - wool', '20% - polyester'],
            variants: [
                {
                    id: 2544,
                    color: 'green',
                    image: 'https://www.vuemastery.com/images/challenges/vmSocks-green.jpg'
                },
                {
                    id: 2545,
                    color: 'blue',
                    image: 'https://www.vuemastery.com/images/challenges/vmSocks-blue.jpg'
                }
            ],
            sizes: ['S', 'M', 'L', 'XS', 'XL'],
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
        updateImage(image) {
            this.image = image;
        }
    }
});

window.App = App.mount('#app');
