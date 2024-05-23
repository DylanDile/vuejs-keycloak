import { createWebHistory, createRouter } from "vue-router";

// COMPONENTS
import Home from '../components/Home.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: () => import('../components/About.vue')
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import('../components/Profile.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router