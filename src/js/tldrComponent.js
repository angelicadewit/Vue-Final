let tldr = Vue.component('tdlr', {
	props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
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
                    <li class="product-card" v-if="product.skin.includes(skinChosen)" v-for="product in products.firstCleansers">
                        <h4>{{product.name}}</h4>
                        <img :src="product.img">
                            <p>Where to buy:</p>
                            <div class="links">
                            <a :href="product.amazon" target="_blank">Amazon</a>
                            <a :href="product.notAmazonURL" target="_blank">{{product.notAmazonStore}}</a>
                        </div>
                        <p>Ingredients Links:</p>
                        <!-- <div class="links"> -->
                            <a :href="product.cosDNALink" target="_blank">CosDNA Analysis</a>
                            <a :href="product.skincarismaLink" target="_blank">Skincarisma Analysis</a>
                            <!-- </div>
                                <small>{{product.ingredients}}</small> -->
                    </li>
                    
                </ul>

                <li class="header">
                    <h3>Second Cleanser</h3>
                </li>
                
                <ul>
                    <li class="product-card" v-if="product.skin.includes(skinChosen)" v-for="product in products.secondCleansers">
                        {{product.name}}<br>
                    <img :src="product.img">
                        <p>Where to buy:</p>
                        <div class="links">
                        <a :href="product.amazon" target="_blank">Amazon</a>
                        <a :href="product.notAmazonURL" target="_blank">{{product.notAmazonStore}}</a>
                    </div>
                    <p>Ingredients Links:</p>
                    <!-- <div class="links"> -->
                        <a :href="product.cosDNALink" target="_blank">CosDNA Analysis</a>
                        <a :href="product.skincarismaLink" target="_blank">Skincarisma Analysis</a>
                        <!-- </div>
                            <small>{{product.ingredients}}</small> -->
                    </li>
                </ul>

                <li class="header">
                    <h3>Hydrating Toner</h3>
                </li>

                <ul>
                    <li class="product-card" v-if="product.skin.includes(skinChosen)" v-for="product in products.hydratingToners">
                        {{product.name}}<br>
                    <img :src="product.img">
                        <p>Where to buy:</p>
                        <div class="links">
                        <a :href="product.amazon" target="_blank">Amazon</a>
                        <a :href="product.notAmazonURL" target="_blank">{{product.notAmazonStore}}</a>
                    </div>
                    <p>Ingredients Links:</p>
                    <!-- <div class="links"> -->
                        <a :href="product.cosDNALink" target="_blank">CosDNA Analysis</a>
                        <a :href="product.skincarismaLink" target="_blank">Skincarisma Analysis</a>
                        <!-- </div>
                            <small>{{product.ingredients}}</small> -->
                    </li>
                </ul>

                <li class="header">
                    <h3>Moisturizer</h3>
                </li>

                <ul>
                    <li class="product-card" v-if="product.skin.includes(skinChosen)" v-for="product in products.moisturizers">
                        {{product.name}}<br>
                    <img :src="product.img">
                        <p>Where to buy:</p>
                        <div class="links">
                        <a :href="product.amazon" target="_blank">Amazon</a>
                        <a :href="product.notAmazonURL" target="_blank">{{product.notAmazonStore}}</a>
                    </div>
                    <p>Ingredients Links:</p>
                    <!-- <div class="links"> -->
                        <a :href="product.cosDNALink" target="_blank">CosDNA Analysis</a>
                        <a :href="product.skincarismaLink" target="_blank">Skincarisma Analysis</a>
                        <!-- </div>
                            <small>{{product.ingredients}}</small> -->
                    </li>
                </ul>
                
                <li class="header">
                    <h3>Sunscreen</h3>
                </li>

                <ul>
                    <li class="product-card" v-if="product.skin.includes(skinChosen)" v-for="product in products.sunscreen">
                        {{product.name}}<br>
                    <img :src="product.img">
                        <p>Where to buy:</p>
                        <div class="links">
                        <a :href="product.amazon" target="_blank">Amazon</a>
                        <a :href="product.notAmazonURL" target="_blank">{{product.notAmazonStore}}</a>
                    </div>
                    <p>Ingredients Links:</p>
                    <!-- <div class="links"> -->
                        <a :href="product.cosDNALink" target="_blank">CosDNA Analysis</a>
                        <a :href="product.skincarismaLink" target="_blank">Skincarisma Analysis</a>
                        <!-- </div>
                            <small>{{product.ingredients}}</small> -->
                    </li>
                </ul>
            </ol>
	</div>

    
    `
})