var app = new Vue({
	el: '#app',
	// computed: {
	// 	skins: function() {
	// 		let skins = [];
	// 		for (var p in this.products) {
	// 			this.products[p].forEach(function(prod) {
	// 				skins = skins.concat(prod.skin)
	// 			})
	// 		}
	// 		skins = skins.filter(function(item, pos) {
	// 			return skins.indexOf(item) == pos;
	// 		})
	// 		return skins
	// 	}
	// },
	data: {
		message: 'Hello Vue!',
		skins: ["oily", "combo", "normal", "dry"],
		skinChosen: "dry",
		products: products
	},
	methods: {

	}
})
