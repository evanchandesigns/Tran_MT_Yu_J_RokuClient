import LoginPage from "./LoginComponent.js";
import ProfilesPage from "./ProfilesComponent.js";
import ParentsMovies from "./ParentsMoviesComponent.js";
import PageNotFound from "./PageNotFoundComponent.js";

let cacheduser = JSON.parse(localStorage.getItem('cacheduser'));

const routes = [
    {
        path: "/", name: "LoginPage", component: LoginPage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('cacheduser')) {
                next({ name: 'ParentsMovies', params: { current: cacheduser } });
            } else {
                next();
            }
        },
    },
    { path: "/forget-password" },
    { path: "/signup" },
    { path: "/profiles", name: "ProfilesPage", component: ProfilesPage, props: true },
    { path: "/profiles/edit" },
    { path: "/parents-movies", name: "ParentsMovies", component: ParentsMovies, props: true },
    { path: "/parents", redirect: "/parents-movies" },
    { path: "*", name: "PageNotFound", component: PageNotFound },
]

const router = new VueRouter({
    routes
})

export default router