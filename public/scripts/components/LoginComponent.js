import Header from "./HeaderComponent.js";

export default {
    name: "LoginPage",

    template: `
        <section id="loginPage">
            <header-area></header-area>
            <h2>Sign In</h2>
            <form>
                <div class="inputField">
                    <img src="images/user.svg" alt="Username Icon">
                    <input v-model="input.username" type="text" placeholder="Username" required>
                </div>
                <div class="inputField">
                    <img src="images/lock.svg" alt="Password Icon">
                    <input v-model="input.password" type="password" placeholder="Password" required>
                </div>
                <button @click.prevent="signIn()" type="submit" class="pinkButton">Sign In</button>
            </form>
            <router-link to="/forget-password">Forget Password?</router-link>
            <router-link to="/signup">Don't have an account? Sign up</router-link>
        </section>
    `,

    data() {
        return {
            input: {
                username: "",
                password: "",
            },
        }
    },

    methods: {
        signIn() {
            if (this.input.username != "" && this.input.password != "") {
                let usercreds = JSON.stringify({ username: this.input.username, password: this.input.password });

                let url = `/ums/login`;

                fetch(url, {
                    method: 'POST',
                    body: usercreds,
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
                            window.localStorage.setItem('cacheduser', JSON.stringify(data));
                            this.$router.replace({
                                name: "ProfilesPage",
                            });

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