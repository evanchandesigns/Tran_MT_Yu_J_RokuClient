export default {
    name: "Header",

    template: `
        <header>
            <nav class="navBar">
                <router-link to="/"><img src="images/roku.svg" class="logo" alt="Roku Logo"></router-link>
                <button @click.prevent=signOut()>Log Out</button>
            </nav>
        </header>
    `,

    methods: {
        signOut() {
            if (localStorage.getItem('cacheduser')) {
                localStorage.removeItem('cacheduser');
                this.$router.push({
                    name: "LoginPage",
                });
            }
        }
    },
}