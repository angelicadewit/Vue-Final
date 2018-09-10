let moisturizer = Vue.component('moisturizer', {
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
        <h2>Moisturizers</h2>
        <p>
            This step helps seal in the moisture you added back to you skin. If this is the first time that you are taking care of your skin, there is a high chance that you had messed up your moisture barrier.
            People with oily skin might want to look into more watery moisturizers such as lotions since their face overproduce these types of oils. The dry skinned folks would gravitate towards heavy creams to seal in the moisture that their skin can't produce.
            Typically, moisturizers help most people who have <span>dehydrated</span> skin to figure out what their skin type is. Please take the time to read the ingredients as some moisturizers provide extra benefits such as ceramides and niacinamide.
        </p>
        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>
        <ul>

        <div class="previous">
            <router-link to="/hydrating-toner" tag="previous"><</router-link></router-link>
        </div>
            <li 
                class="product-card"
                v-if="product.skin.includes(skinChosen)"
                v-for="(product, i) in products.moisturizers"
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
                <button @click="toggle(product)">Show more</button>
                <div v-if="product.isActive">
                    {{product.ingredients}}
                </div>

            </li>

            <div class="next">
                <router-link to="/sunscreen" active-class="active" tag="next">></router-link></router-link>
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