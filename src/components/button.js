import Vue from 'vue/dist/vue.esm.js'

export default Vue.component('product-button', {
    props: {
        clickHandler: {
            type: Function,
            required: true
        },
        booleanArg: {
            type: Boolean,
            required: true
        },
        text: {
            type: String,
            required: false
        }
    },
    template: `
    <button :disabled="!booleanArg" :class="[!booleanArg ? 'disabled-button' : 'button']" @click="clickHandler">
    {{ text }}
    </button>
    `
});