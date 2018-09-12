let firstCleanser = Vue.component('first-cleanser', {
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
        <div class="first-cleanser">
            <div class="info-wrapper">
                <h2>First Cleanser</h2>
                    <p>
                        One of the hallmarks of Asian Beauty is the idea of double cleansing.
                    </p>
                    <p>
                        A first cleanser is meant to remove makeup, moisturizers, sunscreen and other oil-based products. 
                    </p>
                    <p>While it seems counterintuitive, the idea is that "like removes like". </p>

                    <p>
                        People with oily skin who might be hesitant to do this because the cleanser will add to the already oily-feeling to their face,
                        oil cleansing helps remove some of that. People with dry skin might want to skip this step or use another type of makeup and sunscreen removers such as micellar water as they feel like it dries out their skin
                    </p>
                    <p>
                        Where to use in the routine: No AM / First PM
                    </p>
                    <p>Since you have <span>{{skinChosen}}</span> skin. These were the recommended products:</p>
            </div>
        
            <ul class="product-list">
            <div class="previous disabled">
                <router-link to="/second-cleanser" active-class="active"><</router-link>
            </div>
                <product 
                    :product="product"
                    v-if="product.skin.includes(skinChosen)"
                    v-for="product in products.firstCleansers"
                >
                </product>

                </li>
                <div class="next">
                    <router-link 
                        to="/second-cleanser"
                        active-class="active"
                        > ><span class="next-span">Second</span><span class="next-span">Cleanser</span>
                    </router-link>
                </div>
            </ul>
        </div>
    `,
})
