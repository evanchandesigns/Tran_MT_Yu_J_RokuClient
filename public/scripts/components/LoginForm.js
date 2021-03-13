export default {
    name: "LoginForm",

    props: ["user"],

    data() {
        return {
            username: "",
            password: "",
            verified: false,
        }
    },

    template: `
    <section class="loginForm book" v-if=!verified>
        <form action="#">
            <input type="text" v-model="username" id="user_name" placeholder="Username" class="book">
            <input type="password" v-model="password" id="user_pass" placeholder="Password" class="book" autocomplete>
            <small>(Click on Sign In to bypass for now)</small>
            <button @click="getUserCreds">Sign In</button>
        </form>
        <a href="#">Forget Password?</a>
        <a href="#">Don't have an account?<span class="bold">Sign up</span></a>
    </section>
    `,

    methods: {
        getUserCreds() {
            this.verified = true;
            location.href = "/profile"
        }
    }
}