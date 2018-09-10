"use strict";

var firstCleanser = Vue.component('first-cleanser', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false
        };
    },
    watch: {},
    template: "\n    <div>\n        <h2>First Cleanser</h2>\n        <p>\n            One of the hallmarks of Asian Beauty is the idea of double cleansing.\n        </p>\n        <p>\n            The idea is to remove makeup, moisturizers, sunscreen and other oil-based products. While it seems counterintuitive, the idea is that \"like removes like\". \n            Common fears include people with oily skin who might be hesitant to do this because the oil will add to the oiliness to their face, this does help remove the \"bad\" oil.\n            People with dry skin might want to skip this step or use another type of makeup and sunscreen removers such as micellar water as they feel like it dries out their skin\n        </p>\n        <p>since you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n\n                        <ul>\n                        <li \n                            class=\"product-card\"\n                            v-if=\"product.skin.includes(skinChosen)\"\n                            v-for=\"(product, i) in products.firstCleansers\"\n                            :class=\"{ activeclass: product.isActive }\n                            \n                        \">\n                            <div>\n                                <h4>{{product.name}}</h4>\n                                <div class=\"img-size\"><img :src=\"product.img\"></div>\n                                    <p>Where to buy:</p>\n                                    <div class=\"links\">\n                                    <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                                    <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n                                </div>\n                                <p>Ingredients:</p>\n                                    <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                                    <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                            </div>\n                            <button @click=\"toggle(product)\">Show more</button>\n                            <div v-if=\"product.isActive\">\n                                {{product.ingredients}}\n                            </div>\n\n                            </li>\n                            </ul>\n                            \n                    <div class=\"next\">\n                        <router-link to=\"/second-cleanser\" active-class=\"main-link\">></router-link></router-link>\n                    </div> \n            </div>\n    ",
    methods: {
        toggle: function toggle(product) {
            console.log(product.isActive);
            product.isActive = !product.isActive;
            button.text = product.isActive ? 'Hide' : 'Show';
        }
    }
});
//# sourceMappingURL=firstCleanserComponent.js.map
