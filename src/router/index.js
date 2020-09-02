import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Notfound from "@/components/Notfound";

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: About},
        { path: '/:id', component: Notfound }
    ]
})
