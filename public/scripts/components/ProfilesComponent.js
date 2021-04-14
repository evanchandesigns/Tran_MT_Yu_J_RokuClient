export default {
    name: "ProfilesPage",

    data() {
        return {
            current: JSON.parse(localStorage.getItem('cacheduser')),
        }
    },

    template: `
        <section id="profilesPage">
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
        // if (this.theuser.parents_img == null) {
        //     this.theuser.parents_img = "placeholder.png";
        // }
        // if (this.theuser.kids_img == null) {
        //     this.theuser.kids_img = "placeholder.png";
        // }
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
        }
    }
}