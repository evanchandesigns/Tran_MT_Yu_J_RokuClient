import Header from "./HeaderComponent.js";

export default {
    name: "ParentsMovies",

    template: `
    <section id="parentsMovies">
        <header-area :settings=settings :parents=parents :reachedhome=reachedhome @click="openMenu()" @pairData="getData"></header-area>
        <h2>Movies</h2>
    </section>
    `,

    data() {
        return {
            current: {}
        }
    },

    created: function () {
        this.reachedhome = true;
        this.parents = true;
        this.settings = true;
    },

    methods: {
        getData(data) {
            this.current = data;
        }
    },

    components: {
        "header-area": Header
    }
}