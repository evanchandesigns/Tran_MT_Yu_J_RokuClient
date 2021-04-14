import router from "./components/Router.js";

(() => {
    const vm = new Vue({
        router,

        data: {
            verified: false,
        },

        methods: {
            signOut() {
                if (localStorage.getItem('cacheduser')) {
                    localStorage.removeItem('cacheduser');
                }
                this.$router.push({
                    name: "LoginPage",
                });
            }
        },

    }).$mount("#app");
})();