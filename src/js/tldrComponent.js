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
                <ul class="product-list">
                <product 
                    :product="product"
                    v-if="product.skin.includes(skinChosen)"
                    v-for="product in products.firstCleansers"
                >
                </product>
                    
                </ul>

                <li class="header">
                    <h3>Second Cleanser</h3>
                </li>
                
                <ul class="product-list">
                <product 
                    :product="product"
                    v-if="product.skin.includes(skinChosen)"
                    v-for="product in products.secondCleansers"
                >
                </product>
                
                    
                </ul>

                <li class="header">
                    <h3>Hydrating Toner</h3>
                </li>

                <ul class="product-list">
                <product 
                    :product="product"
                    v-if="product.skin.includes(skinChosen)"
                    v-for="product in products.hydratingToners"
                >
                </product>
                
                </ul>

                <li class="header">
                    <h3>Moisturizer</h3>
                </li>

                <ul class="product-list">
                <product 
                    :product="product"
                    v-if="product.skin.includes(skinChosen)"
                    v-for="product in products.moisturizers"
                >
                </product>
                </ul>
                
                <li class="header">
                    <h3>Sunscreen</h3>
                </li>

                <ul class="product-list">
                <product 
                    :product="product"
                    v-if="product.skin.includes(skinChosen)"
                    v-for="product in products.sunscreen"
                >
                </product>
                </ul>
            </ol>
	</div>

    
    `,
})