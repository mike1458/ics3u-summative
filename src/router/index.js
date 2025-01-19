import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import MoviesView from '../views/MoviesView.vue';
import DetailView from '../views/DetailView.vue';
import CartView from '../views/CartView.vue';
import SettingsView from '../views/SettingsView.vue';
import ErrorView from '../views/ErrorView.vue';
import { userAuthorized, useStore } from '../store';

const routes = [
    { path: '/', meta: { auth: false }, component: HomeView },
    { path: '/register', meta: { auth: false }, component: RegisterView },
    { path: '/login', meta: { auth: false }, component: LoginView },
    { path: '/movies', meta: { auth: true }, component: MoviesView },
    { path: '/movies/:id', meta: { auth: true }, component: DetailView },
    { path: '/cart', meta: { auth: true }, component: CartView },
    { path: '/settings', meta: { auth: true }, component: SettingsView },
    { path: '/:pathMatch(.*)*', meta: { auth: false }, component: ErrorView }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    try {
        await userAuthorized;

        const store = useStore();
        if (!store.user && to.meta.auth) {
            console.log("User is not logged in. Redirecting to login page.");
            router.push("/login");
        }

        console.log("User is authorized. Proceeding to the route.");
        next();
    } catch (error) {
        console.log(error)
        console.error("Authorization failed or user not logged in:", error);
        if (to.meta.auth) {
            router.push("/login");
        }
        next();
    }
});

export default router;