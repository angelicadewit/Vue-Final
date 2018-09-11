"use strict";

var product = Vue.component('product', {
    props: ["product"],
    data: function data() {
        return {};
    },
    template: "\n        <li \n            class=\"product-card\"\n            :class=\"{ activeclass: product.isActive }\n        \">\n            <div>\n                <h4>{{product.name}}</h4>\n                <div class=\"img-size\"><img :src=\"product.img\"></div>\n                    <p>Where to buy:</p>\n                    <div class=\"links\">\n                    <a :href=\"product.amazon\" target=\"_blank\" class=\"card-link\">Amazon</a>\n                    <a :href=\"product.notAmazonURL\" target=\"_blank\" class=\"card-link\">{{product.notAmazonStore}}</a>\n                </div>\n                <p>Ingredients:</p>\n                    <a :href=\"product.cosDNALink\" target=\"_blank\" class=\"card-link\">CosDNA Analysis</a>\n                    <a :href=\"product.skincarismaLink\" target=\"_blank\" class=\"card-link\">Skincarisma Analysis</a>\n                <button class=\"btn-more-ingredients\" @click=\"toggle(product)\">Show Ingredients</button>\n            </div>\n            \n            <div v-if=\"product.isActive\">\n                {{product.ingredients}}\n            </div>\n        </li>\n    "
});
//# sourceMappingURL=productComponent.js.map
