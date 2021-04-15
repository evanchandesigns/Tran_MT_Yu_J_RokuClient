export default {
    name: "Header",

    props: ["settings", "edit", "reachedhome", "parents", "kids"],

    template: `
        <header>
            <nav class="navBar">
                <router-link to="/"><img src="images/roku.svg" class="logo" alt="Roku Logo"></router-link>
                <button v-if="settings" @click="openSettings()"><img src="images/settings.svg" class="navIcon" alt="Settings Icon"></button>
                <button v-if="edit"><router-link to="/profiles/edit"><img src="images/pencil.svg" class="navIcon" alt="Edit Icon"></router-link></button>
            </nav>
            <div v-if="settingsmenu" class="settingsWrapper">
                <ul>
                    <li>Settings</li>
                    <li @click.prevent=signOut()>Sign Out</li>
                </ul>
            </div>
            <div class="profileWrapper" v-if="reachedhome">
                <img :src="'images/' + current.parents_img" class="profileImage" :alt="current.user_parents" v-if="parents">
                <h4 v-if="parents">{{ current.user_parents }}</h4>
                <img :src="'images/' + current.kids_img" class="profileImage" :alt="current.user_kids" v-if="kids">
                <h4 v-if="kids">{{ current.user_kids }}</h4>
            </div>
        </header>
    `,

    data() {
        return {
            settingsmenu: false,
            current: {}
        }
    },

    created: function () {
        if (localStorage.getItem("cacheduser") == null) {
            return;
        } else {
            this.current = JSON.parse(localStorage.getItem('cacheduser'));
            this.$emit('pairData', this.current);
        }
    },

    methods: {
        signOut() {
            if (localStorage.getItem('cacheduser')) {
                localStorage.removeItem('cacheduser');
                this.$router.push({
                    name: "LoginPage",
                });
            }
        },

        openSettings() {
            if (this.settingsmenu == false) {
                this.settingsmenu = true;
            } else {
                this.settingsmenu = false;
            }
        }
    },
}