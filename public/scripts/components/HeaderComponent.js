export default {
    name: "Header",

    props: ["settings", "edit", "reachedhome", "parents", "kids", "purplelogo", "whitelogo"],

    template: `
        <header>
            <nav>
                <router-link to="/"  v-if="purplelogo"><img src="images/roku.svg" class="logo" alt="Roku Logo"></router-link>
                <router-link to="/" v-if="whitelogo"><img src="images/roku_white.svg" class="logo" alt="Roku Logo"></router-link >
                <div class="rightWrapper">
                    <div v-if="reachedhome">
                        <router-link to="/profiles"class="profileWrapper">
                            <img :src="'images/' + current.parents_img" class="profileImage" :alt="current.user_parents" v-if="parents">
                            <h4 v-if="parents">{{ current.user_parents }}</h4>
                        </router-link>
                        <router-link to="/profiles" class="profileWrapper">
                            <img :src="'images/' + current.kids_img" class="profileImage" :alt="current.user_kids" v-if="kids">
                            <h4 v-if="kids">{{ current.user_kids }}</h4>
                        </router-link>
                    </div>
                    <button v-if="settings" @click="openSettings()"><img src="images/settings.svg" class="navIcon" alt="Settings Icon"></button>
                    <!-- <button v-if="edit"><router-link to="/profiles/edit"><img src="images/pencil.svg" class="navIcon" alt="Edit Icon"></router-link></button> -->
                </div>
            </nav>
            <div v-if="settingsmenu" class="settingsWrapper">
                <h3>SETTINGS</h3>
                <ul>
                    <!-- <li><router-link to="/profiles/edit">Edit Profiles</router-link></li>
                    <li><router-link to="">Terms of Use</router-link></li>
                    <li><router-link to="">Privacy Statement</router-link></li> -->
                    <li @click.prevent=signOut()>Sign Out</li>
                </ul>
            </div>
        </header>
    `,

    data() {
        return {
            settingsmenu: false,
            current: {},
        }
    },

    created: function () {
        if (localStorage.getItem("cacheduser") == null) {
            return;
        } else {
            this.current = JSON.parse(localStorage.getItem('cacheduser'));
            this.$emit('pairData', this.current);
        }

        if (this.current.parents_img == null) {
            this.current.parents_img = "placeholder.png";
        }
        if (this.current.kids_img == null) {
            this.current.kids_img = "placeholder.png";
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