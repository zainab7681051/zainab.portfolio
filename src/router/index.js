import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/home.vue"),
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import("../views/skills.vue"),
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import("../views/projects.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;