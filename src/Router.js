import { createRouter, createWebHistory } from 'vue-router'

import PageFinish from "./views/PageFinish.vue";
import Page404 from "./views/Page404.vue";
import Page3D from "./views/Page3D.vue";

export default function createVueRouter(Store) {
    const routes = [
        {path: '/', name: 'default', component: Page3D},
        {path: '/finish-18h7dgy32last0', name: 'finish', component: PageFinish},

        {path: '/:pathMatch(.*)*', name: 'page404', component: Page404},
    ];

    const Router = createRouter({
        history: createWebHistory(),
        routes: routes,
    });

    Router.beforeResolve(async (to) => {
        if (window?.onbeforeunload) {
            if (confirm("Изменения не сохранены. Вы уверены, что хотите покинуть страницу?"))
                window.onbeforeunload = null;
            else
                return false;
        }
    });

    return Router;
}
