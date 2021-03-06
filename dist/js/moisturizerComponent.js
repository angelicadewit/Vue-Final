"use strict";

var moisturizer = Vue.component('moisturizer', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false
        };
    },
    watch: {},
    template: "\n    <div class=\"moisturizer\">\n        <div class=\"info-wrapper\">\n            <h2>Moisturizers for <span>{{skinChosen}}</span> skin</h2>\n            <p>\n                This step helps seal in the moisture you added back to you skin.\n            </p>\n                \n            <p>\n                If this is the first time that you are taking care of your skin, there is a high chance that you had messed up your moisture barrier.\n            </p>\n\n            <p>\n                People with oily skin might want to look into more watery moisturizers such as lotions since their face overproduce these types of oils. The dry skinned folks would gravitate towards heavy creams to seal in the moisture that their skin can't produce.\n                Typically, moisturizers help most people who have <span>dehydrated</span> skin to figure out what their skin type is. Please take the time to read the ingredients as some moisturizers provide extra benefits such as ceramides and niacinamide.\n            </p>\n            <p>\n                Where to use in the routine: Third AM / Fourth PM\n            </p>\n        </div>\n        <div class=\"dotted\"></div>\n\n        <ul class=\"product-list\">\n            <product \n                :product=\"product\"\n                v-if=\"product.skin.includes(skinChosen)\"\n                v-for=\"product in products.moisturizers\"\n            >\n            </product>\n\n\n        </ul>\n        <div class=\"steps-links\">\n            <div class=\"previous\">\n                <router-link to=\"/hydrating-toner\"><<span class=\"previous-span\">Hydrating</span><span class=\"previous-span\">Toner</span></router-link></router-link>\n            </div>\n            \n            <div class=\"next\">\n                <router-link to=\"/sunscreen\" active-class=\"active\">><span class=\"next-span\">Sunscreen</span></router-link>\n            </div>\n        </div>\n\n\t</div>\n    ",
    methods: {
        toggle: function toggle(product) {
            console.log(product.isActive);
            product.isActive = !product.isActive;
            button.text = product.isActive ? 'Hide' : 'Show';
        }
    }
});
//# sourceMappingURL=moisturizerComponent.js.map
