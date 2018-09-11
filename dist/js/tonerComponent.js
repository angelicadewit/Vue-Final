"use strict";

var hydratingToner = Vue.component('hydrating-toner', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false
        };
    },
    watch: {},
    template: "\n\t<div>\n        <h2>Hydrating Toners</h2>\n        <p>\n            If you are completely starting out a new routine, this would be the first step to introduce products.\n        </p>\n        <p>\n            Asian Beauty toners are meant to soften your skin and allows subsequent products be absorbed to your skin. Most toners contain humectants, which are ingredients that draw moisture to the skin. You'll find that most of the common dry and oily skin issues are due to the lack of hydration of your skin.\n        </p>\n\n        <p>\n            Where to use in the routine: Second AM / Third PM\n        </p>\n        \n        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n\n        <ul class=\"product-list\">\n            <div class=\"previous\">\n                <router-link to=\"/second-cleanser\" active-class=\"active\"><</router-link></router-link>\n            </div>\n            <product \n                :product=\"product\"\n                v-if=\"product.skin.includes(skinChosen)\"\n                v-for=\"product in products.hydratingToners\"\n            >\n            </product>\n            <div class=\"next\">\n                <router-link to=\"/moisturizer\" active-class=\"active\">></router-link></router-link>\n            </div>\n        </ul>\n\t</div>\n    ",
    methods: {
        toggle: function toggle(product) {
            console.log(product.isActive);
            product.isActive = !product.isActive;
            button.text = product.isActive ? 'Hide' : 'Show';
        }
    }
});
//# sourceMappingURL=tonerComponent.js.map
