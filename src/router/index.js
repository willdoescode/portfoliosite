import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/components/HomePage";
import About from "@/components/About";

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: HomePage },
        { path: '/about', component: About}
    ]
})
