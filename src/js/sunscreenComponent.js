let sunscreen = Vue.component('sunscreen', {
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
        <h2>Sunscreens</h2>
        <p>
            Probably the most important part of your routine. This helps protect you against UV rays. There are two types of sunscreen: Chemical and Physical. Chemical are organic whereas physical are inorganic. If a sunscreen contains either zinc oxide or titanium dioxide, its most likely to be physical.
            The other difference is that physical tend to leave a white cast on your face (meaning a slight white tint on your skin) while chemical can give you a reaction.
        </p>
        <p>
            Where to use in the routine: First AM / No PM
        </p>
        <p><span>Please wear sunscreen even though you live in a cloudy area. There are still UV rays even though there is no sun</span></p>
        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>
        <ul class="product-list">
        <div class="previous">
            <router-link to="/moisturizer"><</router-link></router-link>
        </div>
            <product 
                :product="product"
                v-if="product.skin.includes(skinChosen)"
                v-for="product in products.sunscreen"
            >
            </product>
            <div class="next disabled">
                <router-link to="/home"><</router-link></router-link>
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