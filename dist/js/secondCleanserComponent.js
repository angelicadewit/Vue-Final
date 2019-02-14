"use strict";

var secondCleanser = Vue.component('second-cleanser', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false
        };
    },
    watch: {},
    template: "\n        <div class=\"second-cleanser\">\n            <div class=\"info-wrapper info\">\n                <h2>Second Cleansers for <span>{{skinChosen}}</span> skin</h2>\n                    <p>\n                        The cleansers found in drugstores, skincare stores and the beauty sections in most department stores are these types of cleansers.\n                    </p>\n                    <p>\n                        This cleanser is water-based that is meant to remove any other residue left by oil cleansers. While the first cleanser helps in breaking down grime and other products that would clog skin, the second cleanser is meant to take care of the rest to ensure that your face is clean.\n                    </p>\n                    <p>\n                        The pH balance of the second cleanser is something else to look for. Essentially, you'd want to find one that is close to the pH level of skin, which averages between 4-7.\n                    </p>\n                    <p>\n                        <span>Please stop testing your product if you find that your face feel \"too clean\" like squeaky clean to the point that it feels like your face had been stripped of all oil. You should not feel that your face is too clean.</span>\n                    </p>\n                    <p>\n                        Where to use in the routine: First AM / Second PM\n                    </p>\n\n            </div>\n                <ul class=\"product-list\">\n\n                    <product \n                        :product=\"product\"\n                        v-if=\"product.skin.includes(skinChosen)\"\n                        v-for=\"product in products.secondCleansers\"\n                    >\n                    </product>\n                </ul>\n                <div class=\"steps-links\">\n                <div class=\"previous\">\n                    <router-link to=\"/first-cleanser\" active-class=\"active\"><<span class=\"previous-span\">First</span><span class=\"previous-span\">Cleanser</span></router-link>\n                </div>\n                <div class=\"next\">\n                        <router-link to=\"/hydrating-toner\" active-class=\"active\">><span class=\"next-span\">Hydrating</span><span class=\"next-span\">Toner</span></router-link>\n                </div>\n                </div>\n        </div>\n    "
});
//# sourceMappingURL=secondCleanserComponent.js.map
