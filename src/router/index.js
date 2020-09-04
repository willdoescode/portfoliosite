// have to include all my components for the routing

import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Webdesign from "@/components/Webdesign";
import Testdesign from "@/webdesign/Testdesign";
import Post from "@/components/Post";
import Postpage from "@/components/Postpage";


// Enable the plugin
Vue.use(Router)

export default new Router({
    // I like history mode better but depending on the server it may not support it
    mode: 'history',
    // Defining all my routes along with a name and component to go with it
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
            meta: {
                title: 'Home - Will Does Tech'
            }
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            meta: {
                title: 'About - Will Does Tech'
            }
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts,
            meta: {
                title: 'Contacts - Will Does Tech'
            }
        },
        {
            path: '/webdesign',
            name: 'Webdesign',
            component: Webdesign,
            meta: {
                title: 'Webdesign - Will Does Tech'
            }
        },
        {
            path: '/webdesign/testdesign',
            name: 'Testdesign',
            component: Testdesign,
            meta: {
                title: 'Webdesign testdesign - Will Does Tech'
            }
        },
        {
            path: '/posts',
            component: Postpage,
            name: 'Postpage',
            meta: {
                title: 'Posts - Will Does Tech'
            }
        },
        {
            path: '/posts/:id',
            // my posts use an id system so I can pass /posts/id and it will route to it
            name: 'posts',
            component: Post,
            meta: {
                title: 'Post - Will Does Tech'
            }
        }
    ]
})
