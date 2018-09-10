"use strict";

var hydratingToner = Vue.component('hydrating-toner', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false
        };
    },
    watch: {},
    template: "\n\t<div>\n        <h2>Hydrating Toners</h2>\n        <p>\n            If you are completely starting out a new routine, this would be the first step to introduce products.\n        </p>\n        <p>\n            Asian Beauty toners are meant to soften your skin and allows subsequent products be absorbed to your skin. Most toners contain humectants, which are ingredients that draw moisture to the skin. You'll find that most of the common dry and oily skin issues are due to the lack of hydration of your skin.\n        </p>\n        \n        \n        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n        <ul>\n            <li \n                class=\"product-card\"\n                v-if=\"product.skin.includes(skinChosen)\"\n                v-for=\"(product, i) in products.hydratingToners\"\n                :class=\"{ activeclass: product.isActive }\n                \n            \">\n                <div>\n                    <h4>{{product.name}}</h4>\n                    <div class=\"img-size\"><img :src=\"product.img\"></div>\n                        <p>Where to buy:</p>\n                        <div class=\"links\">\n                        <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                        <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n                    </div>\n                    <p>Ingredients:</p>\n                        <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                        <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                </div>\n                <button @click=\"toggle(product)\">Show more</button>\n                <div v-if=\"product.isActive\">\n                    {{product.ingredients}}\n                </div>\n\n            </li>\n        </ul>\n\n        <router-link to=\"/second-cleanser\" active-class=\"main-link\"><</router-link></router-link>\n        <router-link to=\"/moisturizer\" active-class=\"main-link\">></router-link></router-link>\n\t</div>\n    ",
    methods: {
        toggle: function toggle(product) {
            console.log(product.isActive);
            product.isActive = !product.isActive;
            button.text = product.isActive ? 'Hide' : 'Show';
        }
    }
});
//# sourceMappingURL=tonerComponent.js.map
