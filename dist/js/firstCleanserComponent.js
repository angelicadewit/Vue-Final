"use strict";

var firstCleanser = Vue.component('first-cleanser', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false
        };
    },
    watch: {},
    template: "\n    <div>\n        <h2>First Cleanser</h2>\n        <p>\n            One of the hallmarks of Asian Beauty is the idea of double cleansing.\n        </p>\n        <p>\n            The idea is to remove makeup, moisturizers, sunscreen and other oil-based products. While it seems counterintuitive, the idea is that \"like removes like\". \n            Common fears include people with oily skin who might be hesitant to do this because the oil will add to the oiliness to their face, this does help remove the \"bad\" oil.\n            People with dry skin might want to skip this step or use another type of makeup and sunscreen removers such as micellar water as they feel like it dries out their skin\n        </p>\n        <p>\n            Where to use in the routine: No AM / First PM\n        </p>\n        <p>since you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n            <ul class=\"product-list\">\n            <div class=\"previous disabled\">\n                <router-link to=\"/second-cleanser\" active-class=\"active\"><</router-link></router-link>\n            </div>\n            \n            <product \n                    :product=\"product\"\n                    v-if=\"product.skin.includes(skinChosen)\"\n                    v-for=\"product in products.firstCleansers\"\n                >\n                </product>\n\n                </li>\n                <div class=\"next\">\n                    <router-link to=\"/second-cleanser\" active-class=\"active\">></router-link></router-link>\n                </div>\n                </ul>\n\n            </div>\n    ",
    methods: {
        toggle: function toggle(product) {
            console.log(product.isActive);
            product.isActive = !product.isActive;
            button.text = product.isActive ? 'Hide' : 'Show';
        }
    }
});
//# sourceMappingURL=firstCleanserComponent.js.map
