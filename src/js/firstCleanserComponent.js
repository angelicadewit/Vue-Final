let firstCleanser = Vue.component('first-cleanser', {
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
        <h2>First Cleanser</h2>
        <p>
            One of the hallmarks of Asian Beauty is the idea of double cleansing.
        </p>
        <p>
            The idea is to remove makeup, moisturizers, sunscreen and other oil-based products. While it seems counterintuitive, the idea is that "like removes like". 
            Common fears include people with oily skin who might be hesitant to do this because the oil will add to the oiliness to their face, this does help remove the "bad" oil.
            People with dry skin might want to skip this step or use another type of makeup and sunscreen removers such as micellar water as they feel like it dries out their skin
        </p>
        <p>since you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>
            <ul>
            <div class="previous disabled">
                <router-link to="/second-cleanser" class="next-button" tag="next"><</router-link></router-link>
            </div>
            
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
                </div>
                <button @click="toggle(product)">Show more</button>
                <div v-if="product.isActive">
                    {{product.ingredients}}
                </div>

                </li>
                <div class="next">
                    <router-link to="/second-cleanser" active-class="active" tag="next">></router-link></router-link>
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
