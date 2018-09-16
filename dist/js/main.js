'use strict';

var router = new VueRouter({
	routes: [{ path: '/', component: home }, { path: '/first-cleanser', component: firstCleanser }, { path: '/second-cleanser', component: secondCleanser }, { path: '/hydrating-toner', component: hydratingToner }, { path: '/moisturizer', component: moisturizer }, { path: '/sunscreen', component: sunscreen }, { path: '/unknown-skin', component: unknownSkin }, { path: '/tldr', component: tldr }, { path: '/product', component: product }, { path: '/resources', component: resources }],
	linkActiveClass: "active",
	linkExactActiveClass: "exact-active"
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
		skinChosen: "oily",
		products: products

	},
	methods: {
		selectedSkinType: function selectedSkinType(skin) {
			console.log('user picked their skin type in a child component ', skin);
			this.skinChosen = skin;
		}

	}
});
//# sourceMappingURL=main.js.map
