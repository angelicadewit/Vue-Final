let product = Vue.component('product', {
    props: ["product"],
    data: function () {
        return {
        }
    },
    template: `
        <li 
            class="product-card"
            :class="{ activeclass: product.isActive }
        ">
            <div>
                <h4>{{product.name}}</h4>
                <div class="img-size"><img :src="product.img"></div>
                    <p>Where to buy:</p>
                    <div class="links">
                    <a :href="product.amazon" target="_blank" class="card-link">Amazon</a>
                    <a :href="product.notAmazonURL" target="_blank" class="card-link">{{product.notAmazonStore}}</a>
                </div>
                <p>Ingredients:</p>
                    <a :href="product.cosDNALink" target="_blank" class="card-link">CosDNA Analysis</a>
                    <a :href="product.skincarismaLink" target="_blank" class="card-link">Skincarisma Analysis</a>
                <button class="btn-more-ingredients" @click="toggle(product)">Show Ingredients</button>
            </div>
            
            <div v-if="product.isActive">
                {{product.ingredients}}
            </div>
        </li>
    `,
    methods: {
        toggle: function(product){
            console.log(product.isActive)
            product.isActive = !product.isActive
            // button.text = product.isActive ? 'Hide' : 'Show';
        }
	}
})
