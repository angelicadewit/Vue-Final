"use strict";

var sunscreen = Vue.component('sunscreen', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            isActive: false
        };
    },
    watch: {},
    template: "\n\t<div class=\"sunscreen\">\n        <div class=\"info-wrapper\">\n            <h2>Sunscreens</h2>\n            <p>\n                Probably the most important part of your routine. This helps protect you against UV rays. There are two types of sunscreen: Chemical and Physical. Chemical are organic whereas physical are inorganic. If a sunscreen contains either zinc oxide or titanium dioxide, its most likely to be physical.\n                The other difference is that physical tend to leave a white cast on your face (meaning a slight white tint on your skin) while chemical can give you a reaction.\n            </p>\n            <p>\n                Where to use in the routine: First AM / No PM\n            </p>\n            <p><span>Please wear sunscreen even though you live in a cloudy area. There are still UV rays even though there is no sun</span></p>\n        \n            <p>So you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>\n        </div>\n        <ul class=\"product-list\">\n        <div class=\"previous\">\n            <router-link to=\"/moisturizer\"><<span class=\"previous-span\">Moisturizer</span></router-link>\n        </div>\n            <product \n                :product=\"product\"\n                v-if=\"product.skin.includes(skinChosen)\"\n                v-for=\"product in products.sunscreen\"\n            >\n            </product>\n            <div class=\"next disabled\">\n                <router-link to=\"/home\"><</router-link>\n            </div>\n        </ul>\n\n\t</div>\n    "
});
//# sourceMappingURL=sunscreenComponent.js.map
