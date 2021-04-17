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
            <img src="images/profile_bckgrd.png" class="drawnBackground" draggable="false">
            <header-area :edit="edit" @pairData="getData" :purplelogo=purplelogo :settings=settings></header-area>
            <div class="profilesMain">
                <div class="profilesWrapper">
                <h2>Who's the time traveller today?</h2>
                <div class="eachProfile">
                    <div id="parents">
                        <img :src="'images/' + current.parents_img" class="profileImage" :alt="current.user_parents" @click="toParents">
                        <h4>Parents Profile</h4>
                        <h3 @click="toParents">{{ current.user_parents }}</h3>
                    </div>
                    <div id="kids">
                        <img :src="'images/' + current.kids_img" class="profileImage" :alt="current.user_kids" @click="toKids">
                        <h4>Kids Profile</h4>
                        <h3 @click="toKids">{{ current.user_kids }}</h3>
                    </div>
                </div>
                </div>
            </div>
        </section>
    `,

    created: function () {
        this.settings = true;
        this.edit = true;
        this.purplelogo = true;
    },

    methods: {
        toParents() {
            this.$router.push({
                name: "ParentsMovies",
            });
        },

        toKids() {
            this.$router.push({
                name: "KidsMedia",
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