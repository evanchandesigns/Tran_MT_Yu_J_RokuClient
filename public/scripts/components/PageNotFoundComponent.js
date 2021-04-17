import Header from "./HeaderComponent.js";

export default {
    name: "PageNotFound",

    template: `
        <section id="errorPage">
            <img src="images/other_bckgrd.png" class="drawnBackground" draggable="false">
            <header-area :purplelogo=purplelogo></header-area>
            <div class="errorWrapper">
                <div class="errorArea">
                    <h2>Can't seem to find what you're looking for.</h2>
                    <router-link to="/">Go Back?</router-link>
                </div>
            </div>
        </section>
    `,

    created: function () {
        this.purplelogo = true;
    },

    components: {
        "header-area": Header
    }
}