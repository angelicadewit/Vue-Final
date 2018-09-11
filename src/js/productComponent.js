let product = Vue.component('product', {
    props: ["products", "skin-chosen", "skins","routine-step"],
    data: function () {
        return {
        }
    },
    template: `
        <li 
            class="product-card"
            v-if="product.skin.includes(skinChosen)"
            v-for="product in products.firstCleansers"
            :class="{ activeclass: product.isActive }
        ">
            <div>
                <h4>{{product.name}}</h4>
                <div class="img-size"><img :src="product.img"></div>
                    <p>Where to buy:</p>
                    <div class="links">
                    <a :href="product.amazon" target="_blank">Amazon</a>
                    <a :href="product.notAmazonURL" target="_blank">{{product.notAmazonStore}}</a>
                </div>
                <p>Ingredients:</p>
                    <a :href="product.cosDNALink" target="_blank">CosDNA Analysis</a>
                    <a :href="product.skincarismaLink" target="_blank">Skincarisma Analysis</a>
                    <button class="btn-more-ingredients" @click="toggle(product)">Show Ingredients</button>
            </div>
            
            <div v-if="product.isActive">
                {{product.ingredients}}
            </div>

        </li>
        `
})
