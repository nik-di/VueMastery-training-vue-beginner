import { createApp } from 'vue/dist/vue.esm-bundler.js'

const App = createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks',
            image: 'https://www.vuemastery.com/images/challenges/vmSocks-green.jpg',
            inStock: true,
            inventory: 10,
            sale: true
        }
    }
});

window.App = App.mount('#app');
