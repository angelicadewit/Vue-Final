let product = Vue.component('product', {
    props: ["products", "skin-chosen"],
    data: function () {
        return {
        }
    },
    template: `
        <li v-if="product.skin.includes(skinChosen)" v-for="product in products.firstCleansers">
            {{product.name}}<br>
            <a :href="product.amazon">Amazon</a>
            <a :href="product.notAmazonURL">{{product.notAmazonStore}}</a>
        </li>
    
    `
})