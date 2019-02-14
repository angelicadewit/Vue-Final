let firstCleanser = Vue.component('first-cleanser', {
    props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
            isActive: false,
        }
    },
    template: 
    `
        <div class="first-cleanser">
            <div class="info-wrapper">
                <h2>First Cleansers for <span>{{skinChosen}}</span> skin</h2>
                    <p>
                        One of the hallmarks of Asian Beauty is the idea of double cleansing.
                    </p>
                    <p>
                        A first cleanser is meant to remove makeup, moisturizers, sunscreen and other oil-based products. 
                    </p>
                    <p>While it seems counterintuitive, the idea is that "like removes like". So, effectively what you’re doing  is dissolving and wiping away all the icky dirty oil from your face and replenishing it with clean, nourishing oil.</p>

                    <p>
                        People with oily skin might be hesitant to do this because the cleanser will add to the already oily-feeling to their face. People with dry skin might want to skip this step or use another type of makeup and sunscreen removers such as micellar water as they feel like it dries out their skin
                    </p>
                    <p>
                        Where to use in the routine: No AM / First PM
                    </p>
            </div>
            <div class="dotted"></div>
        
            <ul class="product-list">

                <product 
                    :product="product"
                    v-if="product.skin.includes(skinChosen)"
                    v-for="product in products.firstCleansers"
                >
                </product>

                </li>

            </ul>
            <div class="steps-links">
            <div class="previous">
                <router-link to="/unknown-skin" active-class="active"><<span class="previous-span">Change</span><span class="previous-span">Type</span></router-link>
            </div>
            <div class="next">
                <router-link 
                    to="/second-cleanser"
                    active-class="active"
                    > ><span class="next-span">Second</span><span class="next-span">Cleanser</span>
                </router-link>
            </div>
            </div>
        </div>
    `,
})
