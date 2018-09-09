let firstCleanser = Vue.component('first-cleanser', {
    props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
            
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
                <li class="product-card" v-if="product.skin.includes(skinChosen)" v-for="product in products.firstCleansers">
                    <h4>{{product.name}}</h4>
                    <div class="img-size"><img :src="product.img"></div>
                    <p>Where to buy:</p>
                    <div class="links">
                    <a :href="product.amazon" target="_blank">Amazon</a>
                    <a :href="product.notAmazonURL" target="_blank">{{product.notAmazonStore}}</a>
                    </div>
                    <p>Ingredients Links:</p>
                
                    <a :href="product.cosDNALink" target="_blank">CosDNA Analysis</a>
                    <a :href="product.skincarismaLink" target="_blank">Skincarisma Analysis</a>
                </li>
            </ul>
        <router-link to="/second-cleanser" active-class="main-link">></router-link></router-link>
        
	</div>
    `
})