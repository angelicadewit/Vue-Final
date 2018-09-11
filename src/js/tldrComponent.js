let tldr = Vue.component('tdlr', {
	props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
            isActive: false,
            button: {
                text: 'Show More'
                },
        }
    },
	template: `
	<div>
        <p>Based on your {{skinChosen}} skin, these are the recommended products for you to try</p>
        <p>Please practice YMMV (Your milage may vary). Every skin is unique and just because these products are popular for {{skinChosen}} skin based on replies from the Asian Beauty subreddit, it doesnt mean that it's guaranteed to work for you.</p>
            <ol>
                <li class="header">
                    <h3>First Cleanser</h3>
                </li>
                <ul>
                    <li 
                        class="product-card"
                        v-if="product.skin.includes(skinChosen)"
                        v-for="(product, i) in products.firstCleansers"
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
                    
                </ul>

                <li class="header">
                    <h3>Second Cleanser</h3>
                </li>
                
                <ul>
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
                    
                </ul>

                <li class="header">
                    <h3>Hydrating Toner</h3>
                </li>

                <ul>
                    <li 
                        class="product-card"
                        v-if="product.skin.includes(skinChosen)"
                        v-for="(product, i) in products.hydratingToners"
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
                </ul>

                <li class="header">
                    <h3>Moisturizer</h3>
                </li>

                <ul>
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
                                <button class="btn-more-ingredients" @click="toggle(product)">Show Ingredients</button>
                        </div>
                        <div v-if="product.isActive">
                            {{product.ingredients}}
                        </div>
                
                    </li>
                </ul>
                
                <li class="header">
                    <h3>Sunscreen</h3>
                </li>

                <ul>
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
                            <button class="btn-more-ingredients" @click="toggle(product)">Show Ingredients</button>
                        </div>
                        <div v-if="product.isActive">
                            {{product.ingredients}}
                        </div>

                    </li>
                </ul>
            </ol>
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