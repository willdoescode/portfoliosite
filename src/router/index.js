import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Webdesign from "@/components/Webdesign";
import Testdesign from "@/webdesign/Testdesign";
import Post from "@/components/Post";
import Postpage from "@/components/Postpage";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'Home', component: HomePage },
        { path: '/about', name: 'About', component: About },
        { path: '/contacts', name: 'Contacts', component: Contacts },
        { path: '/webdesign', name: 'Webdesign', component: Webdesign },
        { path: '/webdesign/testdesign', name: 'Testdesign', component: Testdesign },
        { path: '/posts', component: Postpage },
        { path: '/posts/:id', name: 'posts', component: Post }
    ]
})
