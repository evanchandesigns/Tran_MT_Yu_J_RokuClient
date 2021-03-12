import MoviesData from "./components/MoviesData.js";

(() => {
    const vm = new Vue({
        data: {
        },

        created: function () {
            console.log("Fired from main.js");
        },

        methods: {
        },

        components: {
            "movies-section": MoviesData
        },
    }).$mount("#app");
})();