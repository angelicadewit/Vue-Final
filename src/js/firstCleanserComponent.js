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
        <p>
            Where to use in the routine: No AM / First PM
        </p>
        <p>since you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>
            <ul class="product-list">
            <div class="previous disabled">
                <router-link to="/second-cleanser" active-class="active"><</router-link></router-link>
            </div>
            
            <product 
                    :product="product"
                    v-if="product.skin.includes(skinChosen)"
                    v-for="product in products.firstCleansers"
                >
                </product>

                </li>
                <div class="next">
                    <router-link to="/second-cleanser" active-class="active">></router-link></router-link>
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
