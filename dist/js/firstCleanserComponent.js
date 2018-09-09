"use strict";

var firstCleanser = Vue.component('first-cleanser', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {};
    },
    watch: {},
    template: "\n\t<div>\n        <h2>First Cleanser</h2>\n        <p>\n            One of the hallmarks of Asian Beauty is the idea of double cleansing.\n        </p>\n        <p>\n            The idea is to remove makeup, moisturizers, sunscreen and other oil-based products. While it seems counterintuitive, the idea is that \"like removes like\". \n            Common fears include people with oily skin who might be hesitant to do this because the oil will add to the oiliness to their face, this does help remove the \"bad\" oil.\n            People with dry skin might want to skip this step or use another type of makeup and sunscreen removers such as micellar water as they feel like it dries out their skin\n        </p>\n        <p>since you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n\n            <ul>\n                <li class=\"product-card\" v-if=\"product.skin.includes(skinChosen)\" v-for=\"product in products.firstCleansers\">\n                    <h4>{{product.name}}</h4>\n                    <div class=\"img-size\"><img :src=\"product.img\"></div>\n                    <p>Where to buy:</p>\n                    <div class=\"links\">\n                    <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                    <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n                    </div>\n                    <p>Ingredients Links:</p>\n                \n                    <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                    <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                </li>\n            </ul>\n        <router-link to=\"/second-cleanser\" active-class=\"main-link\">></router-link></router-link>\n        \n\t</div>\n    "
});
//# sourceMappingURL=firstCleanserComponent.js.map
