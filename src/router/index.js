import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Notfound from "@/components/Notfound";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'Home', component: HomePage },
        { path: '/about', name: 'About',component: About},
        { path: '/:id', component: Notfound }
    ]
})
