"use strict";

var tldr = Vue.component('tdlr', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false,
            button: {
                text: 'Show More'
            }
        };
    },
    template: "\n\t<div>\n        <p>Based on your {{skinChosen}} skin, these are the recommended products for you to try</p>\n        <p>Please practice YMMV (Your milage may vary). Every skin is unique and just because these products are popular for {{skinChosen}} skin based on replies from the Asian Beauty subreddit, it doesnt mean that it's guaranteed to work for you.</p>\n            <ol>\n                <li class=\"header\">\n                    <h3>First Cleanser</h3>\n                </li>\n                <ul class=\"product-list\">\n                <product \n                    :product=\"product\"\n                    v-if=\"product.skin.includes(skinChosen)\"\n                    v-for=\"product in products.firstCleansers\"\n                >\n                </product>\n                    \n                </ul>\n\n                <li class=\"header\">\n                    <h3>Second Cleanser</h3>\n                </li>\n                \n                <ul class=\"product-list\">\n                <product \n                    :product=\"product\"\n                    v-if=\"product.skin.includes(skinChosen)\"\n                    v-for=\"product in products.secondCleansers\"\n                >\n                </product>\n                \n                    \n                </ul>\n\n                <li class=\"header\">\n                    <h3>Hydrating Toner</h3>\n                </li>\n\n                <ul class=\"product-list\">\n                <product \n                    :product=\"product\"\n                    v-if=\"product.skin.includes(skinChosen)\"\n                    v-for=\"product in products.hydratingToners\"\n                >\n                </product>\n                \n                </ul>\n\n                <li class=\"header\">\n                    <h3>Moisturizer</h3>\n                </li>\n\n                <ul class=\"product-list\">\n                <product \n                    :product=\"product\"\n                    v-if=\"product.skin.includes(skinChosen)\"\n                    v-for=\"product in products.moisturizers\"\n                >\n                </product>\n                </ul>\n                \n                <li class=\"header\">\n                    <h3>Sunscreen</h3>\n                </li>\n\n                <ul class=\"product-list\">\n                <product \n                    :product=\"product\"\n                    v-if=\"product.skin.includes(skinChosen)\"\n                    v-for=\"product in products.sunscreen\"\n                >\n                </product>\n                </ul>\n            </ol>\n\t</div>\n\n    \n    ",
    methods: {
        toggle: function toggle(product) {
            console.log(product.isActive);
            product.isActive = !product.isActive;
            button.text = product.isActive ? 'Hide' : 'Show';
        }
    }
});
//# sourceMappingURL=tldrComponent.js.map
