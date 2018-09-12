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
    <div class="moisturizer">
        <div class="info-wrapper">
            <h2>Moisturizers</h2>
            <p>
                This step helps seal in the moisture you added back to you skin.
            </p>
                
            <p>
                If this is the first time that you are taking care of your skin, there is a high chance that you had messed up your moisture barrier.
            </p>

            <p>
                People with oily skin might want to look into more watery moisturizers such as lotions since their face overproduce these types of oils. The dry skinned folks would gravitate towards heavy creams to seal in the moisture that their skin can't produce.
                Typically, moisturizers help most people who have <span>dehydrated</span> skin to figure out what their skin type is. Please take the time to read the ingredients as some moisturizers provide extra benefits such as ceramides and niacinamide.
            </p>
            <p>
                Where to use in the routine: Third AM / Fourth PM
            </p>
        
            <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>
        </div>

        <ul class="product-list">
            <div class="previous">
                <router-link to="/hydrating-toner"><<span class="previous-span">Hydrating</span><span class="previous-span">Toner</span></router-link></router-link>
            </div>
            <product 
                :product="product"
                v-if="product.skin.includes(skinChosen)"
                v-for="product in products.moisturizers"
            >
            </product>

            <div class="next">
                <router-link to="/sunscreen" active-class="active">><span class="next-span">Sunscreen</span></router-link>
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