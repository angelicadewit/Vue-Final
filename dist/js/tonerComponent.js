"use strict";

var hydratingToner = Vue.component('hydrating-toner', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {};
    },
    watch: {},
    template: "\n\t<div>\n        <h2>Hydrating Toners</h2>\n        <p>\n            This is were I will tell you all about what Hydrating Toner are about.\n            But have you thought about googling what Hydrating Toner are :)\n        </p>\n        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n        <ul>\n            <li class=\"product-card\" v-if=\"product.skin.includes(skinChosen)\" v-for=\"product in products.hydratingToners\">\n                <h4>{{product.name}}</h4>\n                <div class=\"img-size\"><img :src=\"product.img\"></div>\n                <p>Where to buy:</p>\n                <div class=\"links\">\n                <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n            </div>\n            <p>Ingredients Links:</p>\n            <!-- <div class=\"links\"> -->\n                <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                <!-- </div>\n                    <small>{{product.ingredients}}</small> -->\n            </li>\n        </ul>\n\n\t</div>\n    "
});
//# sourceMappingURL=tonerComponent.js.map
