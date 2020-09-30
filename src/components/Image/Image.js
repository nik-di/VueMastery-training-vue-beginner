import Vue from 'vue/dist/vue.esm.js';
import './image.css';

export default Vue.component('product-img', {
    props: {
        image: {
            type: String,
            required: true
        },
        bool: {
            type: Boolean,
            required: false
        }
    },
    template: `
    <div class="product-image">
      
    <!-- 
      Если я хочу добавить только имя класса то его нужно заключить в кавычки как: 'class-name',
      а если параметр из данных экземпляра класса - то без кавычек. 
      В итоге:  [ inStock ? 'class-name' : paramFromInstance ] 
      В случае paramFromInstance - сам параметр со знаечнием должны быть в объекте данных. При вставке параметра, в DOM добавится его значение.
    -->
    <img :class="[bool ? '' : 'out-of-stock']" :src="image" alt="Alt" />

  </div>
    `
})