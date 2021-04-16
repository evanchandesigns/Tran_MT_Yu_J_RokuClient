import Header from "./HeaderComponent.js";

export default {
    name: "ProfilesPage",

    data() {
        return {
            current: {}
        }
    },

    template: `
        <section id="profilesPage">
            <header-area :edit="edit" @pairData="getData" :purplelogo=purplelogo></header-area>
            <h2>Who's the time traveller today?</h2>
            <div class="eachProfile">
                <div id="parents" @click="toParents">
                    <img :src="'images/' + current.parents_img" class="profileImage" :alt="current.user_parents">
                    <h3>{{ current.user_parents }}</h3>
                </div>
                <div id="kids" @click="toKids">
                    <img :src="'images/' + current.kids_img" class="profileImage" :alt="current.user_kids">
                    <h3>{{ current.user_kids }}</h3>
                </div>
            </div>
        </section>
    `,

    created: function () {
        this.edit = true;
        this.purplelogo = true;

        if (this.current.parents_img == null) {
            this.current.parents_img = "placeholder.png";
        }
        if (this.current.kids_img == null) {
            this.current.kids_img = "placeholder.png";
        }
    },

    methods: {
        toParents() {
            this.$router.push({
                name: "ParentsMovies",
            });
        },

        toKids() {
            this.$router.push({
                name: "KidsHome",
            });
        },

        getData(data) {
            this.current = data;
        }
    },

    components: {
        "header-area": Header
    }
}