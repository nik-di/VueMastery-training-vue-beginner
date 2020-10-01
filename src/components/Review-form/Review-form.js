import Vue from 'vue/dist/vue.esm.js';
import './review-form.css';

export default Vue.component('review-form', {
    props: {
        inStockInfo: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
        <ul class="error" v-show="errors.length">
            <li v-for="error in errors">{{ error }}</li>
        </ul>

        <h3 v-show="errors.length === 0">Leave a review</h3>
        <label for="name">Name:</label>
        <input :disabled="!inStockInfo" id="name" v-model="name">
        
        <label for="review">Review:</label>
        <textarea :disabled="!inStockInfo" id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select :disabled="!inStockInfo" id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="recommended">Would you recommend this product?</label>
        <select :disabled="!inStockInfo" id="recommended" v-model="recommended">
            <option>Yes</option>
            <option>No</option>
        </select>

        <input :disabled="!inStockInfo" class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            recommended: null,
            errors: []
        };
    },
    methods: {
        onSubmit() {
            this.validate();
            if (this.name && this.review && this.rating && this.recommended) {
                this.errors.length = 0;
                const productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommended: this.recommended
                };

                this.$emit('review-submitted', productReview);
                this.name = null;
                this.review = null;
                this.rating = null;
                this.recommended = null;
            }
        },
        validate() {
            if (this.name === null) { this.errors.push('Please fill out "Name" field.') }
            if (this.review === null) { this.errors.push('Please fill out "Review" field.') }
            if (this.rating === null) { this.errors.push('Please fill out "Rating" field.') }
            if (this.recommended === null) { this.errors.push('Please fill out "Recommended" field.') }
        }
    }
});