let home = Vue.component('home', {
	props: ["products", "skin-chosen", "skins", "routes"],
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
	template:
	
	`
	<div>
		<div class="info-wrapper">
			<div>
				<h2>What Is Asian Beauty?</h2>
				<p>In it's core, despite most of the products coming from Asia, Asian Beauty(AB) is a multi-step skin routine with each step meant to target a specific need.</p>
				<p>This guide is meant to help you get started, with the first five core steps: Oil Cleanser, Second Cleanser, Hydrating Toner, Moisturizer and Sunscreen</p>
			</div>
			<h2>Ready To Start?</h2>
			
			<h4>
				<router-link to="/unknown-skin" class="unknown-skin-link">
					I don't know my skin
				</router-link>
			</h4>
	

			<div class="select-style">
				<select v-model="localSkinChosen">	
					<option value=""> Choose a skin type</option>
					<option v-for="skin in skins" :value="skin"> {{ skin }} </option>
				</select>
			</div>
		

			<div class="buttons">
				<router-link to="/tldr">
					<button class="home-component" :disabled="localSkinChosen === ''">View Products Only</button>
				</router-link>

				<router-link to="/first-cleanser">
					<button class="home-component" :disabled="localSkinChosen === ''">Let's Go</button>
				</router-link>
			</div>	
		</div>
		
	</div>
    `
})
