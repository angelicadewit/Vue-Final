"use strict";

var secondCleanser = Vue.component('second-cleanser', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false
        };
    },
    watch: {},
    template: "\n\t<div>\n        <h2>Second Cleanser</h2>\n        <p>\n            The cleansers found in drugstores, skincare stores and the beauty sections in most department stores are these types of cleansers.\n        </p>\n        <p>\n            This cleanser is water-based that is meant to remove any other residue left by oil cleansers. While the first cleanser helps in breaking down grime and other products that would clog skin, the second cleanser is meant to take care of the rest to ensure that your face is clean.\n        </p>\n        <p>\n            The pH balance of the second cleanser is something else to look for. Essentially, you'd want to find one that is close to the pH level of skin, which averages between 4-7.\n        </p>\n        <p>\n            <span>Please stop testing your product if you find that your face feel \"too clean\" like squeaky clean to the point that it feels like your face had been stripped of all oil. You should not feel that your face is too clean.</span>\n        </p>\n        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n        <ul>\n            <div class=\"previous\">\n                <router-link to=\"/first-cleanser\" active-class=\"active\"><</router-link></router-link>\n            </div>\n\n            <li \n                class=\"product-card\"\n                v-if=\"product.skin.includes(skinChosen)\"\n                v-for=\"(product, i) in products.secondCleansers\"\n                :class=\"{ activeclass: product.isActive }\n                \n            \">\n                <div>\n                    <h4>{{product.name}}</h4>\n                    <div class=\"img-size\"><img :src=\"product.img\"></div>\n                        <p>Where to buy:</p>\n                        <div class=\"links\">\n                        <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                        <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n                    </div>\n                    <p>Ingredients:</p>\n                        <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                        <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                    <button class=\"btn-more-ingredients\" @click=\"toggle(product)\">Show Ingredients</button>\n                </div>\n                \n                <div v-if=\"product.isActive\">\n                    {{product.ingredients}}\n                </div>\n            </li>\n            <div class=\"next\">\n                <router-link to=\"/hydrating-toner\" active-class=\"active\">></router-link></router-link>\n            </div>\n        </ul>\n    \n        \n\t</div>\n    ",
    methods: {
        toggle: function toggle(product) {
            console.log(product.isActive);
            product.isActive = !product.isActive;
            button.text = product.isActive ? 'Hide' : 'Show';
        }
    }
});
//# sourceMappingURL=secondCleanserComponent.js.map
