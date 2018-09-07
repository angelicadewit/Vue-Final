let hydratingToner = Vue.component('hydrating-toner', {
    props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
            
        }
    },
    watch: {
    },
	template: `
	<div>
        <h2>Hydrating Toners</h2>
        <p>
            This is were I will tell you all about what Hydrating Toner are about.
            But have you thought about googling what Hydrating Toner are :)
        </p>
        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>
        <ul>
            <li class="product-card" v-if="product.skin.includes(skinChosen)" v-for="product in products.hydratingToners">
                <h4>{{product.name}}</h4>
                <div class="img-size"><img :src="product.img"></div>
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

	</div>
    `
})