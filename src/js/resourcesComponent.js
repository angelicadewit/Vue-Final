let resources = Vue.component('resources', {
    data: function () {
        return {
        }
    },
    watch: {
    },
    template: 
    `
        <div class="resources">
            <div class="info-wrapper">
                <h2>Extra Reading</h2>
                    <p>Now that you have read a little about starting an Asian Beauty routine, here are some more links for you to catch up:</p>
                    <ol>
                        <li>
                            <h3><a href="http://reddit.com/r/asianbeauty" target="_blank">Asian Beauty Subreddit</a></h3>
                            <p>A majority of the information were researched and pulled from this subreddit. They offer a daily help thread, various reviews and tons of beginner information to get you started</p>
                        </li>
                        <li>
                            <h3><a href="http://reddit.com/r/asianbeautyexchange" target="_blank">Asian Beauty Exchange Subreddit</a></h3>
                            <p>A buy/sell subreddit dedicated to used products and decants - samples ranging from 5g to 10g - to help you get started. Please exercise control when hauling new products. Since not all skin products are suited for every skin, it's really important to patch test and test products for two weeks before introducting a new product.</p>
                        </li>
                        <li>
                            <h3><a href="http://cosdna.com" target="_blank">CosDNA</a></h3>
                            <p>As you are getting familiarized with the products, it is equally important to know the ingredients contained within them. This is especially helpful when you start having reactions to new products.</p>
                        </li>
                        <li>
                            <h3><a href="http://fiftyshadesofsnails.com" target="_blank">Fifty Shades of Snails</a></h3>
                            <p>A popular blogger within the k-beauty community, "Fiddy" offers reviews of products and tutorials to get started.</p>
                        </li>
                        <li>
                            <h3><a href="https://www.fanserviced-b.com/" target="_blank">Fanserviced-B</a></h3>
                            <p>Another popular blogger within the k-beauty community, Tracy has an excellent visual guide on the full 10-15 step routine as well as reviews and tips for oily-skinned girls</p>
                        </li>
                    </ol>
                    <div class="buttons">
                    <router-link to="/">
                            <button class="home-component">Home</button>
                        </router-link>
                    </div>
            </div>
        </div>
    `,
})
