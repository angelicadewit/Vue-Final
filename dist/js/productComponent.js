"use strict";

var product = Vue.component('product', {
    props: ["products", "skin-chosen"],
    data: function data() {
        return {};
    },
    template: "\n        <li v-if=\"product.skin.includes(skinChosen)\" v-for=\"product in products.firstCleansers\">\n            {{product.name}}<br>\n            <a :href=\"product.amazon\">Amazon</a>\n            <a :href=\"product.notAmazonURL\">{{product.notAmazonStore}}</a>\n        </li>\n    \n    "
});
//# sourceMappingURL=productComponent.js.map
