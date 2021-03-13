import ParentsMoviesData from "./components/ParentsMoviesData.js";
import KidsMoviesData from "./components/KidsMoviesData.js";
import UsersData from "./components/UsersData.js";
import ParentsTvsData from "./components/ParentsTvsData.js";
import KidsTvsData from "./components/KidsTvsData.js";
import ParentsMusicData from "./components/ParentsMusicData.js";
import KidsMusicData from "./components/KidsMusicData.js";


(() => {
    const vm = new Vue({
        data: {
        },

        components: {
            "parents-movies-section": ParentsMoviesData,
            "kids-movies-section": KidsMoviesData,
            "parents-tvs-section": ParentsTvsData,
            "kids-tvs-section": KidsTvsData,
            "parents-music-section": ParentsMusicData,
            "kids-music-section": KidsMusicData,
            "login-page": UsersData
        }
    }).$mount("#app");
})();