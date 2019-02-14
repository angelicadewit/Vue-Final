let sunscreen = Vue.component('sunscreen', {
    props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
            isActive: false,
        }
    },
	template: `
	<div class="sunscreen">
        <div class="info-wrapper info">
            <h2>Sunscreens for <span>{{skinChosen}}</span> skin</h2>
            <p>
                Probably the most important part of your routine. This helps protect you against UV rays. There are two types of sunscreen: Chemical and Physical. Chemical are organic whereas physical are inorganic. If a sunscreen contains either zinc oxide or titanium dioxide, its most likely to be physical.
                The other difference is that physical tend to leave a white cast on your face (meaning a slight white tint on your skin) while chemical can give you a reaction.
            </p>
            <p>
                Where to use in the routine: First AM / No PM
            </p>
            <p><span>Please wear sunscreen even though you live in a cloudy area. There are still UV rays even though there is no sun</span></p>
        </div>
        <div class="dotted"></div>
        
        <ul class="product-list">
            <product 
                :product="product"
                v-if="product.skin.includes(skinChosen)"
                v-for="product in products.sunscreen"
            >
            </product>

        </ul>
        <div class="steps-links">
        <div class="previous">
            <router-link to="/moisturizer"><<span class="previous-span">Moisturizer</span></router-link>
        </div>
        <div class="next">
            <router-link to="/tldr">><span class="next-span">products</span><span class="next-span">list</span></router-link>
        </div>
        </div>

	</div>
    `,
})