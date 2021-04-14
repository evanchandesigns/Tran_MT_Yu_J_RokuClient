import Header from "./HeaderComponent.js";

export default {
    name: "ParentsMovies",

    template: `
    <section id="parentsMovies">
        <header-area></header-area>
        <h2>Movies</h2>
    </section>
    `,

    data() {
        return {
            current: JSON.parse(localStorage.getItem('cacheduser'))
        }
    },

    components: {
        "header-area": Header
    }
}