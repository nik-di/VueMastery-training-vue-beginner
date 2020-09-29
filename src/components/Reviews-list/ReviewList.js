import Vue from 'vue/dist/vue.esm.js';
import './review-list.css';

export default Vue.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="review-container">
            <h3>Reviews:</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                <blockquote>
                    <p>{{ review.review }}</p>
                </blockquote>
                <p>Recommended: {{ review.recommended }}</p>
                </li>
            </ul>
        </div>`
});