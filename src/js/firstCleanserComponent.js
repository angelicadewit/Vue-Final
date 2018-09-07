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
            This is were I will tell you all about what first cleansers are about.
            But have you thought about googling what first cleansers are :)
        </p>
        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>
        <ul>
            <li v-if="product.skin.includes(skinChosen)" v-for="product in products.firstCleansers">
            {{product.name}}<br>
                <a :href="product.amazon">Amazon</a>
                <a :href="product.notAmazonURL">{{product.notAmazonStore}}</a>
            </li>
        </ul>
	</div>
    `
})