const routes = [
	{ path: '/', component: home },
	// { path: '/firstcleanser', component: firstcleanser },
	// { path: '/secondcleanser', component: secondcleanser },
	// { path: '/toner', component: toner },
	// { path: '/moisturizer', component: moisturizer },
	// { path: '/sunscreen', component: sunscreen },
	{ path: '/unknown-skin', component: unknownSkin },
	// { path: '/products-only', component: products-only },
	// { path: '/resources', component: resources },
]

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
	routes: routes,
	data: {
		message: 'Hello Vue!',
		skins: ["oily", "combo", "normal", "dry"],
		skinChosen: "dry",
		products: products
	},
	methods: {

	}
})
