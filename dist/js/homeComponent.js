"use strict";

var home = Vue.component('home', {
	props: ["products", "skin-chosen", "skins", "routes"],
	data: function data() {
		return {};
	},
	template: "\n\t<div>\n\t\t<p>A small resource for people who are interested in Asian Beauty skin routines. </p>\n\t\t<h2>What Is Asian Beauty?</h2>\n\t\t<p>In it's core, despite most of the products coming from Asia, Asian Beauty(AB) is a multi-step skin routine with each step meant to target a specific need.</p>\n\t\t<p>This guide is meant to help you get started, with the first five core steps: Oil Cleanser, Second Cleanser, Hydrating Toner, Moisturizer and Sunscreen</p>\n\t\t<h2>Ready To Start?</h2>\n\t\t<p>Please select a skin type:</p>\n\t\t<p>{{skinChosen}}</p>\n\t\t\n\t\t\n\t\t<router-link to=\"/unknown-skin\">I don't know my skin</router-link>\n\t\t<router-link to=\"/tldr\">I already know my skin</router-link>\n\t\t\n\t</div>\n\n    \n    "
});

// <select v-model="skinChosen">	
//              <option v-for="skin in skins" :value="skin"> {{ skin }} </option>
//          </select>
//# sourceMappingURL=homeComponent.js.map
