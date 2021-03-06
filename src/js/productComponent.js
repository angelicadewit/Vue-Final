let product = Vue.component('product', {
    props: ["product"],
    data: function () {
        return {}
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
                <div class="links">
                    <a :href="product.cosDNALink" target="_blank" class="card-link">CosDNA</a>
                    <a :href="product.skincarismaLink" target="_blank" class="card-link">Skincarisma</a>
                </div>
                <button class="btn-more-ingredients" @click="toggle(product)">
                    <span v-if="product.isActive">Hide Ingredients</span>
                    <span v-else>Show Ingredients</span>
                </button>
            </div>
            
            <div class="ingredients" v-if="product.isActive">
                {{product.ingredients}}
            </div>
        </li>
    `,
    methods: {
        toggle: function(product){
            console.log(product.isActive)
            product.isActive = !product.isActive
        }
	}
})
