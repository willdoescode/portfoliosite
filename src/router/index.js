import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Contacts from "@/components/Contacts";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'Home', component: HomePage },
        { path: '/about', name: 'About', component: About },
        { path: '/contacts', name: 'Contacts', component: Contacts }
    ]
})
