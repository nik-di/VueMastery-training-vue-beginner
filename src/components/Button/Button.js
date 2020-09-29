import Vue from 'vue/dist/vue.esm.js';
import './button.css';

export default Vue.component('product-button', {
    props: {
        clickHandler: {
            type: Function,
            required: true
        },
        inStock: {
            type: Boolean,
            required: false
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