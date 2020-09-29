import Vue from 'vue/dist/vue.esm.js'

export default Vue.component('product-list-info', {
    props: {
        info: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="item in info">{{ item }}</li>
        </ul>
    `
});