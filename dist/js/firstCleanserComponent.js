"use strict";

var firstCleanser = Vue.component('first-cleanser', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {};
    },
    watch: {},
    template: "\n\t<div>\n        <h2>First Cleanser</h2>\n        <p>\n            This is were I will tell you all about what first cleansers are about.\n            But have you thought about googling what first cleansers are :)\n        </p>\n        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n        <ul>\n            <li v-if=\"product.skin.includes(skinChosen)\" v-for=\"product in products.firstCleansers\">\n            {{product.name}}<br>\n                <a :href=\"product.amazon\">Amazon</a>\n                <a :href=\"product.notAmazonURL\">{{product.notAmazonStore}}</a>\n            </li>\n        </ul>\n\t</div>\n    "
});
//# sourceMappingURL=firstCleanserComponent.js.map
