"use strict";

var hydratingToner = Vue.component('hydrating-toner', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {};
    },
    watch: {},
    template: "\n\t<div>\n        <h2>Hydrating Toners</h2>\n        <p>\n            If you are completely starting out a new routine, this would be the first step to introduce products.\n        </p>\n        <p>\n           Asian Beauty toners are meant to soften your skin and allows subsequent products be absorbed to your skin. Most toners contain humectants, which are ingredients that draw moisture to the skin. You'll find that most of the common dry and oily skin issues are due to the lack of hydration of your skin.\n        </p>\n        \n        \n        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n        <ul>\n            <li class=\"product-card\" v-if=\"product.skin.includes(skinChosen)\" v-for=\"product in products.hydratingToners\">\n                <h4>{{product.name}}</h4>\n                <div class=\"img-size\"><img :src=\"product.img\"></div>\n                <p>Where to buy:</p>\n                <div class=\"links\">\n                <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n            </div>\n            <p>Ingredients Links:</p>\n            <!-- <div class=\"links\"> -->\n                <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                <!-- </div>\n                    <small>{{product.ingredients}}</small> -->\n            </li>\n        </ul>\n\n        <router-link to=\"/second-cleanser\" active-class=\"main-link\"><</router-link></router-link>\n        <router-link to=\"/moisturizer\" active-class=\"main-link\">></router-link></router-link>\n\t</div>\n    "
});
//# sourceMappingURL=tonerComponent.js.map
