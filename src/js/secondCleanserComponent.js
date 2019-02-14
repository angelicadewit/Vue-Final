let secondCleanser = Vue.component('second-cleanser', {
    props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
            isActive: false,
        }
    },
    watch: {
    },
    template:
    `
        <div class="second-cleanser">
            <div class="info-wrapper info">
                <h2>Second Cleansers for <span>{{skinChosen}}</span> skin</h2>
                    <p>
                        The cleansers found in drugstores, skincare stores and the beauty sections in most department stores are these types of cleansers.
                    </p>
                    <p>
                        This cleanser is water-based that is meant to remove any other residue left by oil cleansers. While the first cleanser helps in breaking down grime and other products that would clog skin, the second cleanser is meant to take care of the rest to ensure that your face is clean.
                    </p>
                    <p>
                        The pH balance of the second cleanser is something else to look for. Essentially, you'd want to find one that is close to the pH level of skin, which averages between 4-7.
                    </p>
                    <p>
                        <span>Please stop testing your product if you find that your face feel "too clean" like squeaky clean to the point that it feels like your face had been stripped of all oil. You should not feel that your face is too clean.</span>
                    </p>
                    <p>
                        Where to use in the routine: First AM / Second PM
                    </p>

            </div>
                <ul class="product-list">

                    <product 
                        :product="product"
                        v-if="product.skin.includes(skinChosen)"
                        v-for="product in products.secondCleansers"
                    >
                    </product>
                </ul>
                <div class="steps-links">
                <div class="previous">
                    <router-link to="/first-cleanser" active-class="active"><<span class="previous-span">First</span><span class="previous-span">Cleanser</span></router-link>
                </div>
                <div class="next">
                        <router-link to="/hydrating-toner" active-class="active">><span class="next-span">Hydrating</span><span class="next-span">Toner</span></router-link>
                </div>
                </div>
        </div>
    `,
})