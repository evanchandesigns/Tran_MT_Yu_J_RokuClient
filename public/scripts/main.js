import ParentsMoviesData from "./components/ParentsMoviesData.js";
import KidsMoviesData from "./components/KidsMoviesData.js";
import UsersData from "./components/UsersData.js";

(() => {
    const vm = new Vue({
        data: {
        },

        components: {
            "parents-movies-section": ParentsMoviesData,
            "kids-movies-section": KidsMoviesData,
            "login-page": UsersData
        }
    }).$mount("#app");
})();