import { createApp } from 'vue/dist/vue.esm-bundler.js'

const App = createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks',
            image: 'https://www.vuemastery.com/images/challenges/vmSocks-green.jpg',
            inStock: true,
            inventory: 10,
            sale: true,
            details: ['50% - cotton', '30% - wool', '20% - polyester'],
            variants: [
                { id: 2544, color: 'green' },
                { id: 2545, color: 'blue' }
            ],
            sizes: ['S', 'M', 'L', 'XS', 'XL']
        }
    }
});

window.App = App.mount('#app');
