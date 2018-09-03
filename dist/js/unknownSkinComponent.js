"use strict";

var unknownSkin = Vue.component('unknown-skin', {
       props: ["products", "skin-chosen", "skins"],
       // data: function () {
       //     return {
       //     }
       // },
       template: "\n\t<div>\n        <h2>What Skin Type Do I Have?</h2>\n        <p>First, wash your face with just water and your current cleanser. Pat dry and then wait for an hour</p>\n        <p>After the hour, does your skin feel:</p>\n        <h3>Itchy and Tight? Might even have some flaky patches?</h3>\n        <p>You have <span class=\"bold\">Dry Skin</span>.</p>\n        <h3>Shiny and Greasy, especially on your forehead and nose?</h3>\n        <p>You have <span class=\"bold\">Oily Skin</span>.</p>\n        <h3>Shiny and Greasy around your forehead and nose but seems dry around the cheeks and jawline?</h3>\n        <p>You have <span class=\"bold\">Combination Skin</span>.</p>\n        <h3>Seems even and good?</h3>\n        <p>You have <span class=\"bold\">Normal Skin</span>.</p>\n\t</div>\n\n    \n    "
});
//# sourceMappingURL=unknownSkinComponent.js.map
