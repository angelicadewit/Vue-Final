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
        <p><span>Please wear sunscreen even though you live in a cloudy area. There are still UV rays even though there is no sun</span></p>
        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>
        <ul>
        <div class="previous">
            <router-link to="/moisturizer" tag="previous"><</router-link></router-link>
        </div>
                <li 
                class="product-card"
                v-if="product.skin.includes(skinChosen)"
                v-for="(product, i) in products.sunscreen"
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
            <div class="next disabled">
                <router-link to="/home" tag="previous"><</router-link></router-link>
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