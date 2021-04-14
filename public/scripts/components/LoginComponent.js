import Header from "./HeaderComponent.js";

export default {
    name: "LoginPage",

    template: `
        <section id="loginPage">
            <header-area></header-area>
            <h2>Sign In</h2>
            <form>
                <input v-model="input.username" type="text" placeholder="Username" required>
                <input v-model="input.password" type="password" placeholder="Password" required>
                <button @click.prevent="signIn()" type="submit" class="pinkButton">Sign In</button>
            </form>
        </section>
    `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },

    methods: {
        signIn() {
            if (this.input.username != "" && this.input.password != "") {
                let userCreds = JSON.stringify({ username: this.input.username, password: this.input.password });

                let url = `/ums/login`;

                fetch(url, {
                    method: 'POST',
                    body: userCreds,
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.message) {
                            console.warn("User doesn't exist, or something else broke");
                        } else {
                            data.user = this.input.username;
                            this.$router.replace({ name: "ProfilesPage" });
                        }
                    })
                    .catch((err) => console.log(err));
            } else {
                console.log("Please fill the empty fields.");
            }
        }
    },

    components: {
        "header-area": Header
    }
}