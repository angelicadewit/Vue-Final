let home = Vue.component('home', {
	props: ["products", "skin-chosen", "skins", "routes"],
    data: function () {
        return {
        }
    },
	template: `
	<div>
		<p>A small resource for people who are interested in Asian Beauty skin routines. </p>
		<h2>What Is Asian Beauty?</h2>
		<p>In it's core, despite most of the products coming from Asia, Asian Beauty(AB) is a multi-step skin routine with each step meant to target a specific need.</p>
		<p>This guide is meant to help you get started, with the first five core steps: Oil Cleanser, Second Cleanser, Hydrating Toner, Moisturizer and Sunscreen</p>
		<h2>Ready To Start?</h2>
		<p>Please select a skin type:</p>
		<p>{{skinChosen}}</p>
		
		
		<router-link to="/unknown-skin">I don't know my skin</router-link>
		<router-link to="/tldr">I already know my skin</router-link>
		
	</div>

    
    `
})

// <select v-model="skinChosen">	
//              <option v-for="skin in skins" :value="skin"> {{ skin }} </option>
//          </select>