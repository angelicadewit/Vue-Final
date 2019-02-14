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
    <div class="hydrating-toner">
        <div class="info-wrapper info">
            <h2>Hydrating Toners for <span>{{skinChosen}}</span> skin</h2>
            <p>
                If you are completely starting out a new routine, this would be the first step to introduce products.
            </p>
            <p>
                Asian Beauty toners are meant to soften your skin and allows subsequent products be absorbed to your skin. Most toners contain humectants, which are ingredients that draw moisture to the skin. You'll find that most of the common dry and oily skin issues are due to the lack of hydration of your skin.
            </p>

            <p>
                Where to use in the routine: Second AM / Third PM
            </p>
        </div>
    
        <ul class="product-list">
            <product 
                :product="product"
                v-if="product.skin.includes(skinChosen)"
                v-for="product in products.hydratingToners"
            >
            </product>
        </ul>

        <div class="steps-links">
        <div class="previous">
            <router-link to="/second-cleanser" active-class="active"><<span class="previous-span">Second</span><span class="previous-span">Cleanser</span></router-link>
        </div>  
        <div class="next">
            <router-link to="/moisturizer" active-class="active">><span class="next-span">Moisturizer</span></router-link>
        </div>
        </div>
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