import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import("@/views/pages/m-main.vue"),
        redirect: {
            name: "home"
        },
        meta: {
            title: "主入口"
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import("@/views/modules/home")
            }, {
                path: '/product-center',
                name: 'product-center',
                component: () => import("@/views/modules/product-center")
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router
