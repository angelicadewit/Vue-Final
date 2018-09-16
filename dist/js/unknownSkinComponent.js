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
    template: "\n    <div>\n        <div class=\"info-wrapper\">\n            <h2>What Skin Type Do I Have?</h2>\n            <p>There are many ways to tell what kind of skin type you have. There is the touch test, the wash test and various quizzes online for you to search through.</p>\n            <p>Essentially it comes down to how much oil your skin produces to determine your skin type.</p>\n            <p>Here are some quick and dirty ways to tell what skin type you have:</p>\n            <ul class=\"skin-list\">\n\n                <li>\n                <h3>Normal</h3>\n                    <p>Your skin is pretty even-keeled, not much \u2013 or only occasional \u2013 oil, dryness or breakouts which go away quickly. You don\u2019t really experience reactions to products, and your complexion appears balanced.</p>\n                    <p>Your skin should feel both oily and dry. Enough to feel some sort of moisture but not enough to wipe your fingers from the oil</p>\n                </li>\n\n                <li>\n                <h3>Dry</h3>\n                    <p>If your skin feels tight or itchy year round, especially after cleansing, or you never feel like you can get enough moisture, you have dry skin. You might also experience some flakiness or scaling (when you lightly drag your nails across your skin, it looks like a snow storm).</p>\n                    <p>You don't feel any moisture of any kind when you touch your skin</p>\n                </li>\n\n                <li>\n                <h3>Oily</h3>\n                    <p>Your skin is shiny, or you notice a lot of excess oil on your face, neck, shoulders and back. You may feel like you want to wash your face again midday when oil production is at its peak. Your pores appear larger or get clogged easily, leading to black/whiteheads, pimples or cystic acne.</p>\n                    <p>You feel moisture and its enough for you to wipe it off your hands when you touch your skin</p>\n                </li>\n\n                <li>\n                <h3>Combo</h3>\n                    <p>Your skin is oily, has larger pores, or breaks out in your T-zone (forehead, nose, chin), but is dry or normal on your cheeks and jawline.</p>\n                    <p>Most likely, your forehead and nose would feel moisuture and your cheeks feel like its lacking from the moisture</p>\n                </li>\n\n                <li>\n                <h3>Bonus: Dehydrated</h3>\n                    <p>Dehydrated skin is caused by a lack of water and is a temporary skin condition due to climate, environmental factors or not drinking enough water.</p>\n                    <p>If you think you have dry skin, it might be dehydrated skin. However, you can also have dehydrated skin even if you have oily type.</p>\n                    <p>If you can easily see your pore, you have a high chance of it being dehydrated.</p>\n                    <p>It's easier to fix dehydrated skin with a hydrating toner and moisturizer and then reassess what your skin type is.</p>\n                </li>\n            </ul>\n    \n\n            <h3>Ready to start?</h3>\n            <div class=\"select-style\">\n                <select v-model=\"localSkinChosen\">\t\n                    <option value=\"\">Choose a skin type</option>\n                    <option v-for=\"skin in skins\" :value=\"skin\"> {{ skin }} </option>\n                </select>\n            </div>\n\n            <div class=\"buttons\">\n                <router-link to=\"/first-cleanser\">\n                    <button class=\"home-component\" :disabled=\"localSkinChosen === ''\">Let's Go</button>\n                </router-link>\n            </div>\n\n        </div>\n\t</div>\n    "
});
//# sourceMappingURL=unknownSkinComponent.js.map
