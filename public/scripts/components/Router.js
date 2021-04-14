import LoginPage from "./LoginComponent.js";
import ProfilesPage from "./ProfilesComponent.js";

const routes = [
    {
        path: "/", name: "LoginPage", component: LoginPage, props: true,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('cacheduser')) {
                let user = JSON.parse(localStorage.getItem('cacheuser'));
                next({ name: 'home', params: { currentuser: user } });
            } else {
                next();
            }
        }
    },
    { path: "/profiles", name: "ProfilesPage", component: ProfilesPage, props: true }
]

const router = new VueRouter({
    routes
})

export default router