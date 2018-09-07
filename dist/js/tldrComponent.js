"use strict";

var tldr = Vue.component('tdlr', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {};
    },
    template: "\n\t<div>\n        <p>Based on your {{skinChosen}} skin, these are the recommended products for you to try</p>\n        <p>Please practice YMMV (Your milage may vary). Every skin is unique and just because these products are popular for {{skinChosen}} skin based on replies from the Asian Beauty subreddit, it doesnt mean that it's guaranteed to work for you.</p>\n            <ol>\n                <li class=\"header\">\n                    <h3>First Cleanser</h3>\n                </li>\n                <ul>\n                    <li class=\"product-card\" v-if=\"product.skin.includes(skinChosen)\" v-for=\"product in products.firstCleansers\">\n                        <h4>{{product.name}}</h4>\n                        <div class=\"img-size\"><img :src=\"product.img\"></div>\n                            <p>Where to buy:</p>\n                            <div class=\"links\">\n                            <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                            <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n                        </div>\n                        <p>Ingredients Links:</p>\n                        <!-- <div class=\"links\"> -->\n                            <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                            <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                            <!-- </div>\n                                <small>{{product.ingredients}}</small> -->\n                    </li>\n                    \n                </ul>\n\n                <li class=\"header\">\n                    <h3>Second Cleanser</h3>\n                </li>\n                \n                <ul>\n                    <li class=\"product-card\" v-if=\"product.skin.includes(skinChosen)\" v-for=\"product in products.secondCleansers\">\n                        <h4>{{product.name}}</h4>\n                        <div class=\"img-size\"><img :src=\"product.img\"></div>\n                        <p>Where to buy:</p>\n                        <div class=\"links\">\n                        <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                        <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n                    </div>\n                    <p>Ingredients Links:</p>\n                    <!-- <div class=\"links\"> -->\n                        <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                        <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                        <!-- </div>\n                            <small>{{product.ingredients}}</small> -->\n                    </li>\n                </ul>\n\n                <li class=\"header\">\n                    <h3>Hydrating Toner</h3>\n                </li>\n\n                <ul>\n                    <li class=\"product-card\" v-if=\"product.skin.includes(skinChosen)\" v-for=\"product in products.hydratingToners\">\n                    <h4>{{product.name}}</h4>\n                    <div class=\"img-size\"><img :src=\"product.img\"></div>\n                        <p>Where to buy:</p>\n                        <div class=\"links\">\n                        <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                        <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n                    </div>\n                    <p>Ingredients Links:</p>\n                    <!-- <div class=\"links\"> -->\n                        <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                        <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                        <!-- </div>\n                            <small>{{product.ingredients}}</small> -->\n                    </li>\n                </ul>\n\n                <li class=\"header\">\n                    <h3>Moisturizer</h3>\n                </li>\n\n                <ul>\n                    <li class=\"product-card\" v-if=\"product.skin.includes(skinChosen)\" v-for=\"product in products.moisturizers\">\n                    <h4>{{product.name}}</h4>\n                        <div class=\"img-size\"><img :src=\"product.img\"></div>\n                        <p>Where to buy:</p>\n                        <div class=\"links\">\n                        <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                        <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n                    </div>\n                    <p>Ingredients Links:</p>\n                    <!-- <div class=\"links\"> -->\n                        <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                        <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                        <!-- </div>\n                            <small>{{product.ingredients}}</small> -->\n                    </li>\n                </ul>\n                \n                <li class=\"header\">\n                    <h3>Sunscreen</h3>\n                </li>\n\n                <ul>\n                    <li class=\"product-card\" v-if=\"product.skin.includes(skinChosen)\" v-for=\"product in products.sunscreen\">\n                    <h4>{{product.name}}</h4>\n                    <div class=\"img-size\"><img :src=\"product.img\"></div>\n                        <p>Where to buy:</p>\n                        <div class=\"links\">\n                        <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                        <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n                    </div>\n                    <p>Ingredients Links:</p>\n                    <!-- <div class=\"links\"> -->\n                        <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                        <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                        <!-- </div>\n                            <small>{{product.ingredients}}</small> -->\n                    </li>\n                </ul>\n            </ol>\n\t</div>\n\n    \n    "
});
//# sourceMappingURL=tldrComponent.js.map
