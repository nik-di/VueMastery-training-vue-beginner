import Vue from 'vue/dist/vue.esm.js'

export default Vue.component('product-button', {
    props: {
        clickHandler: {
            type: Function,
            required: true
        },
        inStock: {
            type: Boolean,
            required: true
        },
        text: {
            type: String,
            required: false
        },
        className: {
            type: String,
            required: false
        }
    },
    template: `
    <button :disabled="!inStock" :class="classes" @click="clickHandler">
    {{ text }}
    </button>
    `,
    computed: {
        classes() {
            const displayClassesArr = [];
            if (!this.inStock) {
                displayClassesArr.push('disabled-button');
                return displayClassesArr.join(' ');
            }
            this.className ? displayClassesArr.push(this.className) : null;
            return displayClassesArr.join(' ');
        }
    }
});