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
		<p>A small resource for people who are interested in Asian Beauty skin routines. </p>
		<h2>What Is Asian Beauty?</h2>
		<p>In it's core, despite most of the products coming from Asia, Asian Beauty(AB) is a multi-step skin routine with each step meant to target a specific need.</p>
		<p>This guide is meant to help you get started, with the first five core steps: Oil Cleanser, Second Cleanser, Hydrating Toner, Moisturizer and Sunscreen</p>
		<h2>Ready To Start?</h2>

		<router-link to="/unknown-skin">
			<button class="foo bar">I don't know my skin</button>
		</router-link>
		

		<div class="select-style">
			<select v-model="localSkinChosen">	
				<option value=""> Choose a skin type</option>
				<option v-for="skin in skins" :value="skin"> {{ skin }} </option>
			</select>
		</div>
	
			
		<router-link to="/tldr">
			<button>Only Products</button>
		</router-link>

		<router-link to="/first-cleanser">
		<button class="foo bar">Let's Go</button>
		</router-link>

		
	</div>
    `
})
