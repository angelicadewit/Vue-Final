"use strict";

var firstCleanser = Vue.component('first-cleanser', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false
        };
    },
    watch: {},
    template: "\n        <div class=\"first-cleanser\">\n            <div class=\"info-wrapper\">\n                <h2>First Cleanser</h2>\n                    <p>\n                        One of the hallmarks of Asian Beauty is the idea of double cleansing.\n                    </p>\n                    <p>\n                        A first cleanser is meant to remove makeup, moisturizers, sunscreen and other oil-based products. \n                    </p>\n                    <p>While it seems counterintuitive, the idea is that \"like removes like\". </p>\n\n                    <p>\n                        People with oily skin who might be hesitant to do this because the cleanser will add to the already oily-feeling to their face,\n                        oil cleansing helps remove some of that. People with dry skin might want to skip this step or use another type of makeup and sunscreen removers such as micellar water as they feel like it dries out their skin\n                    </p>\n                    <p>\n                        Where to use in the routine: No AM / First PM\n                    </p>\n                    <p>Since you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n            </div>\n        \n            <ul class=\"product-list\">\n            <div class=\"previous disabled\">\n                <router-link to=\"/second-cleanser\" active-class=\"active\"><</router-link>\n            </div>\n                <product \n                    :product=\"product\"\n                    v-if=\"product.skin.includes(skinChosen)\"\n                    v-for=\"product in products.firstCleansers\"\n                >\n                </product>\n\n                </li>\n                <div class=\"next\">\n                    <router-link \n                        to=\"/second-cleanser\"\n                        active-class=\"active\"\n                        > ><span class=\"next-span\">Second</span><span class=\"next-span\">Cleanser</span>\n                    </router-link>\n                </div>\n            </ul>\n        </div>\n    "
});
//# sourceMappingURL=firstCleanserComponent.js.map
