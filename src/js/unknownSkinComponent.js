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
        <h2>What Skin Type Do I Have?</h2>
        <p>First, wash your face with just water and your current cleanser. Pat dry and then wait for an hour</p>
        <p>After the hour, does your skin feel:</p>
        <h3>Itchy and Tight? Might even have some flaky patches?</h3>
        <p>You have <span class="bold">Dry Skin</span>.</p>
        <h3>Shiny and Greasy, especially on your forehead and nose?</h3>
        <p>You have <span class="bold">Oily Skin</span>.</p>
        <h3>Shiny and Greasy around your forehead and nose but seems dry around the cheeks and jawline?</h3>
        <p>You have <span class="bold">Combination Skin</span>.</p>
        <h3>Seems even and good?</h3>
        <p>You have <span class="bold">Normal Skin</span>.</p>
    
        <div class="select-style">
            <select v-model="localSkinChosen">	
                <option value="">Choose a skin type</option>
                <option v-for="skin in skins" :value="skin"> {{ skin }} </option>
            </select>
            <router-link to="/">I don't know my skin</router-link>
        </div>
        
	</div>
    `
})