"use strict";

var unknownSkin = Vue.component('unknown-skin', {
    props: ["products", "skin-chosen", "skins"],
    data: function data() {
        return {
            localSkinChosen: ""
        };
    },
    watch: {
        localSkinChosen: function localSkinChosen(skin) {
            console.log(skin);
            this.$emit('selectedskintype', this.localSkinChosen);
        }
    },
    template: "\n\t<div>\n        <h2>What Skin Type Do I Have?</h2>\n        <p>First, wash your face with just water and your current cleanser. Pat dry and then wait for an hour</p>\n        <p>After the hour, does your skin feel:</p>\n        <h3>Itchy and Tight? Might even have some flaky patches?</h3>\n        <p>You have <span class=\"bold\">Dry Skin</span>.</p>\n        <h3>Shiny and Greasy, especially on your forehead and nose?</h3>\n        <p>You have <span class=\"bold\">Oily Skin</span>.</p>\n        <h3>Shiny and Greasy around your forehead and nose but seems dry around the cheeks and jawline?</h3>\n        <p>You have <span class=\"bold\">Combination Skin</span>.</p>\n        <h3>Seems even and good?</h3>\n        <p>You have <span class=\"bold\">Normal Skin</span>.</p>\n    \n        <div class=\"select-style\">\n            <select v-model=\"localSkinChosen\">\t\n                <option value=\"\">Choose a skin type</option>\n                <option v-for=\"skin in skins\" :value=\"skin\"> {{ skin }} </option>\n            </select>\n            <router-link to=\"/\">I don't know my skin</router-link>\n        </div>\n        \n\t</div>\n    "
});
//# sourceMappingURL=unknownSkinComponent.js.map
