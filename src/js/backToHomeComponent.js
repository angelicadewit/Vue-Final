let backToHome = Vue.component('back-to-home', {
    props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
        }
    },
    watch: {
    },
    template: 
    `
    <div class="buttons">
        <router-link to="/home">
            <button class="home-component" :disabled="localSkinChosen === ''">Let's Go</button>
        </router-link>
    </div>
    `,
})