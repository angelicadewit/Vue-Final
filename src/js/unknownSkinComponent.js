let unknownSkin = Vue.component('unknown-skin', {
    props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
            localSkinChosen: ""
        }
    },
    watch: {
        localSkinChosen: function(skin) {
            console.log(skin)
            this.$emit('selectedskintype', this.localSkinChosen);
        }
    },
	template: `
    <div>
        <div class="info-wrapper">
            <h2>What Skin Type Do I Have?</h2>
            <p>There are many ways to tell what kind of skin type you have. There is the touch test, the wash test and various quizzes online for you to search through.</p>
            <p>Essentially it comes down to how much oil your skin produces to determine your skin type.</p>
            <p>Here are some quick and dirty ways to tell what skin type you have:</p>
            <ul class="skin-list">

                <li>
                <h3>Normal</h3>
                    <p>Your skin is pretty even-keeled, not much – or only occasional – oil, dryness or breakouts which go away quickly. You don’t really experience reactions to products, and your complexion appears balanced.</p>
                    <p>Your skin should feel both oily and dry. Enough to feel some sort of moisture but not enough to wipe your fingers from the oil</p>
                </li>

                <li>
                <h3>Dry</h3>
                    <p>If your skin feels tight or itchy year round, especially after cleansing, or you never feel like you can get enough moisture, you have dry skin. You might also experience some flakiness or scaling (when you lightly drag your nails across your skin, it looks like a snow storm).</p>
                    <p>You don't feel any moisture of any kind when you touch your skin</p>
                </li>

                <li>
                <h3>Oily</h3>
                    <p>Your skin is shiny, or you notice a lot of excess oil on your face, neck, shoulders and back. You may feel like you want to wash your face again midday when oil production is at its peak. Your pores appear larger or get clogged easily, leading to black/whiteheads, pimples or cystic acne.</p>
                    <p>You feel moisture and its enough for you to wipe it off your hands when you touch your skin</p>
                </li>

                <li>
                <h3>Combo</h3>
                    <p>Your skin is oily, has larger pores, or breaks out in your T-zone (forehead, nose, chin), but is dry or normal on your cheeks and jawline.</p>
                    <p>Most likely, your forehead and nose would feel moisuture and your cheeks feel like its lacking from the moisture</p>
                </li>

                <li>
                <h3>Bonus: Dehydrated</h3>
                    <p>Dehydrated skin is caused by a lack of water and is a temporary skin condition due to climate, environmental factors or not drinking enough water.</p>
                    <p>If you think you have dry skin, it might be dehydrated skin. However, you can also have dehydrated skin even if you have oily type.</p>
                    <p>If you can easily see your pore, you have a high chance of it being dehydrated.</p>
                    <p>It's easier to fix dehydrated skin with a hydrating toner and moisturizer and then reassess what your skin type is.</p>
                </li>
            </ul>
        </div>
    

        <h2>Ready to start?</h2>
        <div class="select-style">
            <select v-model="localSkinChosen">	
                <option value="">Choose a skin type</option>
                <option v-for="skin in skins" :value="skin"> {{ skin }} </option>
            </select>
        </div>

        <div class="buttons">
            <router-link to="/first-cleanser">
                <button class="home-component" :disabled="localSkinChosen === ''">Let's Go</button>
            </router-link>
        </div>
	</div>
    `
})