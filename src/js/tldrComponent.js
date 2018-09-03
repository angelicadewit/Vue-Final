let tldr = Vue.component('tdlr', {
	props: ["products", "skin-chosen", "skins"],
    data: function () {
        return {
        }
    },
	template: `
	<div>
        <p>Based on your skin type, these are the recommended products for you to try:</p>
        <h2>Please, for all that is cute and fuzzy, YMMV</h2>
        <h2>Please, for all that are shiny and pretty, patch test. patch test. patch test.</h2>
        
	</div>

    
    `
})