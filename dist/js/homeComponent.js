"use strict";

var home = Vue.component('home', {
	props: ["products", "skin-chosen", "skins", "routes"],
	data: function data() {
		return {
			localSkinChosen: ""
		};
	},
	watch: {
		localSkinChosen: function localSkinChosen(skin) {
			console.log(skin);
			this.$emit('selectedskintype', this.localSkinChosen);
		}
	},
	template: "\n\t<div>\n\t\t<p>A small resource for people who are interested in Asian Beauty skin routines. </p>\n\t\t<h2>What Is Asian Beauty?</h2>\n\t\t<p>In it's core, despite most of the products coming from Asia, Asian Beauty(AB) is a multi-step skin routine with each step meant to target a specific need.</p>\n\t\t<p>This guide is meant to help you get started, with the first five core steps: Oil Cleanser, Second Cleanser, Hydrating Toner, Moisturizer and Sunscreen</p>\n\t\t<h2>Ready To Start?</h2>\n\n\t\t<router-link to=\"/unknown-skin\">\n\t\t\tI don't know my skin\n\t\t</router-link>\n\t\t\n\n\t\t<div class=\"select-style\">\n\t\t\t<select v-model=\"localSkinChosen\">\t\n\t\t\t\t<option value=\"\"> Choose a skin type</option>\n\t\t\t\t<option v-for=\"skin in skins\" :value=\"skin\"> {{ skin }} </option>\n\t\t\t</select>\n\t\t</div>\n\t\n\n\t\t<div class=\"buttons\">\n\t\t\t<router-link to=\"/tldr\">\n\t\t\t\t<button class=\"home-component\">View Products Only</button>\n\t\t\t</router-link>\n\n\t\t\t<router-link to=\"/first-cleanser\">\n\t\t\t\t<button class=\"home-component\">Let's Go</button>\n\t\t\t</router-link>\n\t\t</div>\t\n\n\t\t\n\t</div>\n    "
});
//# sourceMappingURL=homeComponent.js.map
