let home = Vue.component('home', {
	props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
        }
    },
	template: `
	<div>
		<p>A small resource for people who are interested in Asian Beauty skin routines. </p>
		<h2>What Is Asian Beauty?</h2>
		<p>In it's core, despite most of the products coming from Asia, Asian Beauty(AB) is a multi-step skin routine with each step meant to target a specific need.</p>
		<p>This guide is meant to help you get started, with the first five core steps.</p>
		<h2>Ready To Start?</h2>
		<p>Please select a skin type:</p>
		<select v-model="skinChosen">	
			<option :prop="skin in skins" :value="skin"> {{ skin }} </option>
		</select>
	</div>

    
    `
})