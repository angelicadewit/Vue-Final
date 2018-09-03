'use strict';

var router = new VueRouter({
	routes: [{ path: '/', component: home },
	// { path: '/firstcleanser', component: firstcleanser },
	// { path: '/secondcleanser', component: secondcleanser },
	// { path: '/toner', component: toner },
	// { path: '/moisturizer', component: moisturizer },
	// { path: '/sunscreen', component: sunscreen },
	{ path: '/unknown-skin', component: unknownSkin }, { path: '/tldr', component: tldr }]
});

// const router = new VueRouter({
// 	routes: [
// 		{ path: '/home', component: home,
// 			children: [
// 				{ path: '', component: home },
// 				{ path: '/unknown-skin', component: unknownSkin },
// 				{ path: '/tldr', component: tldr },
// 			]
// 		}
// 	]
// })

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
	router: router,
	data: {
		message: 'Hello Vue!',
		skins: ["oily", "combo", "normal", "dry"],
		skinChosen: "dry",
		products: products
	},
	methods: {}
});
//# sourceMappingURL=main.js.map
