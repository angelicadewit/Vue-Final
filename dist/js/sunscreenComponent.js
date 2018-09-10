"use strict";

var sunscreen = Vue.component('sunscreen', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false
        };
    },
    watch: {},
    template: "\n\t<div>\n        <h2>Sunscreens</h2>\n        <p>\n            Probably the most important part of your routine. This helps protect you against UV rays. There are two types of sunscreen: Chemical and Physical. Chemical are organic whereas physical are inorganic. If a sunscreen contains either zinc oxide or titanium dioxide, its most likely to be physical.\n            The other difference is that physical tend to leave a white cast on your face (meaning a slight white tint on your skin) while chemical can give you a reaction.\n        </p>\n        <p><span>Please wear sunscreen even though you live in a cloudy area. There are still UV rays even though there is no sun</span></p>\n        <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n        <ul>\n        <div class=\"previous\">\n            <router-link to=\"/moisturizer\" tag=\"previous\"><</router-link></router-link>\n        </div>\n                <li \n                class=\"product-card\"\n                v-if=\"product.skin.includes(skinChosen)\"\n                v-for=\"(product, i) in products.sunscreen\"\n                :class=\"{ activeclass: product.isActive }\n                \n            \">\n                <div>\n                    <h4>{{product.name}}</h4>\n                    <div class=\"img-size\"><img :src=\"product.img\"></div>\n                        <p>Where to buy:</p>\n                        <div class=\"links\">\n                        <a :href=\"product.amazon\" target=\"_blank\">Amazon</a>\n                        <a :href=\"product.notAmazonURL\" target=\"_blank\">{{product.notAmazonStore}}</a>\n                    </div>\n                    <p>Ingredients:</p>\n                        <a :href=\"product.cosDNALink\" target=\"_blank\">CosDNA Analysis</a>\n                        <a :href=\"product.skincarismaLink\" target=\"_blank\">Skincarisma Analysis</a>\n                </div>\n                <button @click=\"toggle(product)\">Show More</button>\n                <div v-if=\"product.isActive\">\n                    {{product.ingredients}}\n                </div>\n        \n            </li>\n            <div class=\"next disabled\">\n                <router-link to=\"/home\" tag=\"previous\"><</router-link></router-link>\n            </div>\n        </ul>\n\n\t</div>\n    ",
    methods: {
        toggle: function toggle(product) {
            console.log(product.isActive);
            product.isActive = !product.isActive;
            button.text = product.isActive ? 'Hide' : 'Show';
        }
    }
});
//# sourceMappingURL=sunscreenComponent.js.map
