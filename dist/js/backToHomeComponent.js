"use strict";

var backToHome = Vue.component('back-to-home', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {};
    },
    watch: {},
    template: "\n    <div class=\"buttons\">\n        <router-link to=\"/home\">\n            <button class=\"home-component\" :disabled=\"localSkinChosen === ''\">Let's Go</button>\n        </router-link>\n    </div>\n    "
});
//# sourceMappingURL=backToHomeComponent.js.map
