import Vue from 'vue/dist/vue.esm.js';
import './product.css';

export default Vue.component('product', {
    // Стиль именования входных параметров: camelCase в JS, а kebab-case в HTML (если состоит из нескольких слов)
    props: {
        componentPremiumInfo: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div class="product">

      <product-img :bool="inStock" :image="image"></product-img>

      <div class="product-info">

        <h1>{{ title }}<span class="sale" v-show="onSale">Sale!</span></h1>
        <p>{{ description }}</p>
        <p v-if="inStock">In stock</p>
        <p v-else>Out of stock</p>
        <p>Shipping: {{ shipping }}</p>

        <product-list-info :info="details"></product-list-info>

        <div class="color-circle-wrapper">
          <!-- Style Binding: ( :style="{ 'background-color' или backgroundColor без кавычек и в camelCase ... ) -->
          <div class="color-circle" v-for="(variant, index) in variants" :key="variant.id"
            @mouseover="updateVariant(index)" :style="{ 'background-color': variant.color }">
          </div>
        </div>

        <product-list-info :info="sizes"></product-list-info>
        
        <product-button :clickHandler="addToCart" :in-stock="inStock" text="Add to cart"></product-button>

        <product-button :clickHandler="reset" :in-stock="inStock" className="red" text="Reset"></product-button>
        
        <product-button :clickHandler="removeProduct" :inStock="inStock" text="Remove this"></product-button>

      </div>
      <div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview" :inStockInfo="inStock"></review-form>
      </div>
    </div>
    `,
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
            reviews: []
        }
    },
    methods: {
        addToCart() {
            const { id } = this.variants[this.selectedVariant];
            this.$emit('add-to-cart', id);
        },
        reset() {
            this.$emit('reset');
        },
        removeProduct() {
            const { id } = this.variants[this.selectedVariant];
            this.$emit('remove-from-cart', id);
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addReview(review) {
            this.reviews.push(review);
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
        },
        shipping() {
            return `${this.componentPremiumInfo ? 'Free!' : '$2.99'}`;
        }
    }
});
