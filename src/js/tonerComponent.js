let hydratingToner = Vue.component('hydrating-toner', {
    props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
            isActive: false,
        }
    },
    watch: {
    },
	template: `
	<div>
        <h2>Hydrating Toners</h2>
        <p>
            If you are completely starting out a new routine, this would be the first step to introduce products.
        </p>
        <p>
            Asian Beauty toners are meant to soften your skin and allows subsequent products be absorbed to your skin. Most toners contain humectants, which are ingredients that draw moisture to the skin. You'll find that most of the common dry and oily skin issues are due to the lack of hydration of your skin.
        </p>
        
        
        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>

        <ul>
            <div class="previous">
                <router-link to="/second-cleanser" tag="previous"><</router-link></router-link>
            </div>
            <li 
                class="product-card"
                v-if="product.skin.includes(skinChosen)"
                v-for="(product, i) in products.hydratingToners"
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
                </div>
                <button class="btn-more-ingredients" @click="toggle(product)">Show More</button>
                <div v-if="product.isActive">
                    {{product.ingredients}}
                </div>

            </li>
            <div class="next">
                <router-link to="/moisturizer" active-class="active" tag="next">></router-link></router-link>
            </div>
        </ul>
	</div>
    `,
    methods: {
        toggle: function(product){
            console.log(product.isActive)
            product.isActive = !product.isActive
            button.text = product.isActive ? 'Hide' : 'Show';
        }
	}
})