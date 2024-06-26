import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Intro',
        component: () => import("../views/intro.vue"),
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