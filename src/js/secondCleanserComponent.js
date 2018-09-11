let secondCleanser = Vue.component('second-cleanser', {
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
        <h2>Second Cleanser</h2>
        <p>
            The cleansers found in drugstores, skincare stores and the beauty sections in most department stores are these types of cleansers.
        </p>
        <p>
            This cleanser is water-based that is meant to remove any other residue left by oil cleansers. While the first cleanser helps in breaking down grime and other products that would clog skin, the second cleanser is meant to take care of the rest to ensure that your face is clean.
        </p>
        <p>
            The pH balance of the second cleanser is something else to look for. Essentially, you'd want to find one that is close to the pH level of skin, which averages between 4-7.
        </p>
        <p>
            <span>Please stop testing your product if you find that your face feel "too clean" like squeaky clean to the point that it feels like your face had been stripped of all oil. You should not feel that your face is too clean.</span>
        </p>
        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>
        <ul>
            <div class="previous">
                <router-link to="/first-cleanser" active-class="active"><</router-link></router-link>
            </div>

            <li 
                class="product-card"
                v-if="product.skin.includes(skinChosen)"
                v-for="(product, i) in products.secondCleansers"
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
                    <button class="btn-more-ingredients" @click="toggle(product)">Show Ingredients</button>
                </div>
                
                <div v-if="product.isActive">
                    {{product.ingredients}}
                </div>
            </li>
            <div class="next">
                <router-link to="/hydrating-toner" active-class="active">></router-link></router-link>
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